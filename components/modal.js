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
    }, []);
    
    async function makeReq() {

        console.log(typeof(msg));

        // if (char > 150) {
        //     alert('sorry, message length exceeded limit. Please shorten the message!');
        // }
        // else {
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
        // }
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
                    <button disabled={wait} onClick={makeReq}>go</button>
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
                    margin: 1rem auto;
                    padding: .3rem 1.3rem;
                    background: #FF8A00;
                    color: #fff;
                    border: none;
                }
            `}</style>
        </div>
    )
}