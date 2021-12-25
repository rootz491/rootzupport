
export default function Nav() {
    return (
        <nav>
            <label htmlFor="menu" className="menu-btn"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg=="/></label>
            <input type="checkbox" id="menu" name="menu" hidden/>
            <div id="navWrapper">
                <a rel="noreferrer" target="_blank" href="https://karansh.codes">portfolio</a>
                <a rel="noreferrer" target="_blank" href="https://linktr.ee/rootz491">mystery</a>
                <a rel="noreferrer" target="_blank" href="https://github.com/rootz491"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB0ElEQVRIie3WPWtUQRTG8V8SMEE7C41JDBK1tVZBIgo2QhJBrW0sFNQirZXfQiW+oJUQMJhgI/gJbKy0E7QLRFzBl5i4Fvdec507921XUuWByzJzz3P+58zO7Cw72iYNtIidxCzO4xAm0vlP+IBlLOHj/ypuHHexgW7Ns4lnaWF9aQ5fGwDDp4OZXqG3JB20hea7v9kWOtcnNA9v3PmE4vIexzEs1IAW0riTubkOxpqAY8mHg9WYxj4MpZ+n0/lMI4H/fh10Unz3HmlScU5HA/+GreMHBgPDbNpFqP0twaPBeCjNXaqXit0utoRmWgryrFQFv4+AT/QIPhXkeVcV3ImAh6sMFdoT5OnkX4bfcTjWB3gkGP+zd0LQaiTBdI/g0BfL/Vcrikv9RrH6Ou3G2yDPiyrDfATcxSsNf30k5/V1JMd8lekg1kvg3/AAlzAV+KZwGY/wPeJdx4G6ip/kDFfwPFLAucBzBj9KCu7icR2U5OJfSw2r2IunaeLPuF3iu1MC/aJBt5ku2roWrzb0HI5AN3GhKTTTdfyW/Kc6q35nD0ag19pCM81IljefsEpZzJoeOg01hnv41QD8Ew8Vb6e+NIob2FXyfkDzs76j7dMfXTjhKzmestYAAAAASUVORK5CYII="/></a>
            </div>

            <style>{`
                nav {
                    padding: 0.5rem 3rem;
                    background: #fafafa;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                #navWrapper {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
                label {
                    cursor: pointer;
                    visibility: hidden;
                }
                nav a {
                    color: #4C3F91;
                    margin-left: 3rem;
                }
                @media screen and (max-width: 700px) {
                    nav {
                        padding: .5rem;
                        display: block;
                    }
                    nav label {
                        visibility: visible;
                    }
                    #navWrapper {
                        display: none;
                    }
                    #menu:checked ~ #navWrapper {
                        display: grid;
                        gap: 1rem;
                        justify-content: center;
                    }
                    #navWrapper a {
                        margin: 0;
                        justify-self: center;
                    }
                }
            `}</style>
        </nav>
    )
}
