import { useState, useRef, useEffect } from "react";

const conv = {
    1: 5,
    2: 12
}

export default function Modal({ c }) {
    const charElement = useRef();
    const [msg, setMsg] = useState('');
    const [wait, setWait] = useState(false);
    const [char, setChar] = useState(0);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(conv[c]);
    }, [c]);
    
    async function makeReq() {

        

        if (char > 150) {
            alert('sorry, message length exceeded limit. Please shorten the message!');
        }
        else {
            setWait(true);
            const res = await fetch('/api/support', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    c: c,
                    msg
                })
            });
            const data = await res.json();
            if (res.ok) {
                location = data.url;
            } else {
                alert(data.error)
            }
            setWait(false);
        }
    }

    function update(e) {
        let pTag = charElement.current;
        setMsg(e.target.value);
        setChar(e.target.value.length);
        // console.log(msg);
        // console.log(char);
        if (char > 150) {
            pTag.style.color = 'red';
        } else {
            pTag.style.color = 'white';
        }
    }
    
    return (
        <div id="modal">
            <h1>Amount: ${amount}</h1>
            <div id="textBoxWrapper">
                <div>
                    <p>optional message</p>
                    <p ref={charElement}>{char} / 150 chars</p>
                </div>
                <textarea 
                    name="msg" 
                    onChange={update} 
                    value={msg} 
                    placeholder="any message for me, maybe mension yourself :)"
                ></textarea>
                <div>
                    <button disabled={wait} onClick={makeReq}>
                        <span class="text">proceed</span>
                    </button>
                </div>
            </div>

            <style>{`
                #modal {
                    width: 50%;
                    padding: 1rem 15px;
                    margin: 2em auto;
                    background: #9145B6;
                    color: #fff;
                    border-radius: 5px;
                }
                #modal h1 {
                    text-align: center;
                }
                #textBoxWrapper {
                    width: 80%;
                    margin: 1rem auto;
                }
                #textBoxWrapper div {
                    display: flex;
                    justify-content: space-between;
                }
                #modal textarea {
                    margin: .5rem 0;
                    width: 100%;
                    height: 100px;
                    padding: .5rem;
                    font-size: .8rem;
                    border-radius: 3px;
                }
                textarea:focus {
                    outline: none;
                }

                #modal button {
                    margin: .3rem auto;
                    align-items: center;
                    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
                    border: 0;
                    border-radius: 8px;
                    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
                    box-sizing: border-box;
                    color: #FFFFFF;
                    display: flex;
                    font-family: Phantomsans, sans-serif;
                    font-size: 16px;
                    justify-content: center;
                    line-height: 1em;
                    max-width: 100%;
                    min-width: 140px;
                    padding: 3px;
                    text-decoration: none;
                    user-select: none;
                    -webkit-user-select: none;
                    touch-action: manipulation;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: all .3s;
                   }
                   
                   #modal button:active,
                   button:hover {
                    outline: 0;
                   }
                   
                   #modal button span {
                    background-color: rgb(5, 6, 45);
                    padding: 16px 24px;
                    border-radius: 6px;
                    width: 100%;
                    height: 100%;
                    transition: 300ms;
                   }
                   
                   #modal button:hover span {
                    background: none;
                   }
                   
                   #modal button:active {
                    transform: scale(0.9);
                   }

                   @media screen and (max-width: 1000px) {
                        #modal {
                            width: 80%;
                        }
                   }
                   @media screen and (max-width: 650px) {
                        #modal {
                            width: 90%;
                        }
                        #textBoxWrapper {
                            width: 90%;
                        }
                        #modal h1 {
                            font-size: 22px;
                        }
                    }
                    @media screen and (max-width: 400px) {
                        #modal {
                            padding: .3rem;
                            margin: 1rem 0;
                            width: 100%
                        }
                        #textBoxWrapper p {
                            // padding: .5rem;
                            font-size: 13px;
                        }
                    }
                `}</style>
        </div>
    )
}