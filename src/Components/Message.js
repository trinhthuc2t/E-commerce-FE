import React, {useEffect, useRef, useState} from 'react';
import {useWebSocket} from "../context/WebSocketContext";
import {getMesByAccId, getMesById, saveMes} from "../Service/messageSevice";
import {useSelector} from "react-redux";
import {findById} from "../Service/accountService";
import image_default from "../image/user-image.png"
import _ from "lodash";
import {formatTimeAgo} from "../Validate/formatTimeAgo";
import {FaRegClock} from "react-icons/fa";
import {LuSendHorizonal} from "react-icons/lu";

const Message = () => {


    const [mes, setMes] = useState([])
    const [inputMes, setInputMes] = useState("")
    const [load, setLoad] = useState(true);
    const websocket = useWebSocket()
    const [accounts, setAccounts] = useState([])
    const [inputName, setInputName] = useState("")
    const [mesAcc, setMesAcc] = useState([])
    const accountLogin = useSelector(state => state.auth.userLogin)
    const chatContainerRef = useRef(null);
    const messageContainerRef = useRef();

    const [selectedAccount, setSelectedAccount] = useState({});


    useEffect(() => {
        if (websocket) {
            websocket.subscribe('/message', async (message) => {
                setLoad(true)
            })
            websocket.subscribe('/notification', async (notification) => {

            });
        }
    }, [websocket]);
    const pressEnterToSend = (event) => {
        if (event.key === 'Enter')
            saveMessage();
    }


    useEffect(() => {
        getMesById(accountLogin.id, selectedAccount.id).then(res => {
            setMes(res.data)
            setLoad(false)
        }).catch(err => console.log(err))
    }, [load, selectedAccount])
    useEffect(() => {
        getMesByAccId(accountLogin.id).then(res => {
            setMesAcc(res.data)
            setLoad(false)
        }).catch(err => console.log(err))
    }, [load])
    useEffect(() => {
        findById(inputName).then(res => {
            setAccounts(res.data)
        }).catch(err => console.log(err))
    }, [inputName])
    const saveMessage = () => {
        if (inputMes.trim() !== '') {
            const message = {
                message: inputMes,
                receiver: selectedAccount,
                sender: accountLogin,
                status: false
            };

            saveMes(message)
                .then(res => {
                    console.log(res);
                    setInputMes(''); // Clear the input after sending the message
                })
                .catch(err => console.log(err));
        }
    };

    const handleInputMes = (e) => {
        setInputMes(e.target.value)
    }
    const handleInputNameSearch = (e) => {
        const inputName = e.target.value
        setInputName(inputName)
    }

    useEffect(() => {
        // Scroll to the bottom when new messages are added
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [mes]);


    return (
        <div className='col-9' style={{marginLeft: "25%"}}>
            <div className='container'>
                <section className="gradient-custom">
                    <div className="container py-5">

                        <div className="row">

                            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                                <div className='input-group'>
                                    <input className="form-control mb-3 dropdown-toggle" data-bs-toggle="dropdown"
                                           aria-expanded="false" placeholder='Tìm kiếm người dùng...' type="text"
                                           onChange={handleInputNameSearch}/>

                                    <ul className="dropdown-menu dropdown-menu-start w-100"
                                        style={{maxHeight: '200px', overflowY: 'auto'}} ref={chatContainerRef}>
                                        {!_.isEmpty(inputName) ?
                                            accounts.map(item => (
                                                <li className="d-flex align-items-center dropdown-item py-2"
                                                    key={item.id}
                                                    style={{cursor: 'pointer'}}
                                                    onClick={() => setSelectedAccount(item)}>
                                                    <img src={item.avatar ? item.avatar : image_default} alt="avatar"
                                                         width={30} style={{height: '30px'}}/>
                                                    <div className="ms-2">{item.username}</div>
                                                </li>
                                            ))
                                            :
                                            <li className="dropdown-item py-2">Không tìm thấy tài khoản</li>
                                        }
                                    </ul>
                                </div>
                                <div className="card mask-custom">
                                    <div className="card-body">

                                        <ul className="list-unstyled mb-0">
                                            {/* eslint-disable-next-line array-callback-return */}
                                            {!_.isEmpty(mesAcc) && mesAcc.map(item => {
                                                if (item.sender.id !== accountLogin.id)
                                                    return (
                                                        <li className="p-2 border-bottom" key={item.id}>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row">
                                                                    <img
                                                                        src={item.sender.avatar}
                                                                        alt="avatar"
                                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                                        width="60" height={60}/>
                                                                    <div className="mt-2">
                                                                        <p className="btn p-0 fw-bold mb-0"
                                                                           onClick={() => setSelectedAccount(item.sender)}>{item.sender.firstname} {item.sender.lastname} </p>
                                                                        <p className="small ">{item.message}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="small  mb-1">{formatTimeAgo(new Date(item.createAt))}</p>
                                                                    <span className="badge bg-danger float-end">1</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                else
                                                    return (
                                                        <li className="p-2 border-bottom" key={item.id}>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row">
                                                                    <img
                                                                        src={item.receiver.avatar}
                                                                        alt="avatar"
                                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                                        width="60" height={60}/>
                                                                    <div className="mt-2">
                                                                        <p className="btn fw-bold p-0 mb-0"
                                                                           onClick={() => setSelectedAccount(item.receiver)}>{item.receiver.firstname} {item.receiver.lastname} </p>
                                                                        <p className="small ">{item.message}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pt-1 mt-2">
                                                                    <p className="small  mb-1">{formatTimeAgo(new Date(item.createAt))}</p>
                                                                    <span className="badge bg-danger float-end">1</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                            })}
                                        </ul>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-lg-7 col-xl-8">
                                {!_.isEmpty(selectedAccount) ?
                                    <>
                                        <div className='d-flex mb-2 form-control'>
                                            <img className='rounded-circle'
                                                 src={selectedAccount.avatar ? selectedAccount.avatar : image_default}
                                                 alt="avatar" style={{width: '50px', height: '50px'}}/>
                                            <h3 className="ms-3 mt-2">{selectedAccount.firstname} {selectedAccount.lastname}</h3>
                                        </div>
                                        <div className='form-control' style={{height: '450px', overflowY: 'auto'}}
                                             ref={chatContainerRef}>
                                            <ul className="list-unstyled">
                                                {!_.isEmpty(mes) && mes.map(item => {
                                                    if (item.sender.id !== accountLogin.id) {
                                                        return (
                                                            <li className="d-flex justify-content-start mb-4"
                                                                key={item.id}>
                                                                <img src={item.sender.avatar} alt="avatar"
                                                                     className="rounded-circle d-flex justify-content-start me-3"
                                                                     width="40" height="40"/>
                                                                <div className="card w-75">
                                                                    <div
                                                                        className="card-header d-flex justify-content-start"
                                                                        style={{borderBottom: "1px solid rgba(255,255,255,.3)"}}>
                                                                        <span className="small mb-0"><FaRegClock
                                                                            className='mb-1'/> {formatTimeAgo(new Date(item.createAt))}</span>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <p className="mb-0">{item.message}</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        );
                                                    } else {
                                                        return (
                                                            <li className="d-flex justify-content-end mb-4"
                                                                key={item.id}>
                                                                <div className="card w-75">
                                                                    <div
                                                                        className="card-header d-flex justify-content-end p-3"
                                                                        style={{borderBottom: "1px solid rgba(255,255,255,.3)"}}>
                                                                        <span className="small mb-0"><FaRegClock
                                                                            className='mb-1'/> {formatTimeAgo(new Date(item.createAt))}</span>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <p className="mb-0">{item.message}</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        );
                                                    }
                                                })}
                                            </ul>
                                        </div>
                                        <div className="mt-2 d-flex">
                                            <div className="form-outline form-white flex-grow-1">
                                                <input className="form-control py-3" onKeyDown={pressEnterToSend}
                                                       value={inputMes} placeholder='Nhắn tin...'
                                                       onChange={handleInputMes}/>
                                            </div>
                                            <button type="submit" className="btn btn-outline-primary ms-2"
                                                    onClick={saveMessage}>
                                                <LuSendHorizonal className='text-32 p-0'/>
                                            </button>
                                        </div>

                                    </>

                                    : <div>holo</div>}

                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Message;