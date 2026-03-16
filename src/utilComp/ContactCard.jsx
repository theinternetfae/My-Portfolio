import { createPortal } from "react-dom";
 
function ContactCard({close}) {
    
    return createPortal( 
        <div className="contact-card">
            <div className="contact-deets">
                <i className="bi bi-x-square-fill leave-deets" onClick={close}></i>
                <h1>Contact Me</h1>

                <div className="full-contacts">

                    <a href="https://wa.me/+2349043809172" target="_blank">
                        <div className="contact">
                            <i className="bi bi-whatsapp cont-icon"></i>
                            <p>+234 904 380 9172</p>
                        </div>
                    </a>

                    <a href="https://github.com/theinternetfae" target="_blank">
                        <div className="contact">
                            <i className="bi bi-github cont-icon"></i>
                            <p>theinternetfae | Favour Egwele</p>
                        </div>

                    </a>

                    <a href="mailto:favoregwele@gmail.com">
                        <div className="contact">
                            <i className="bi bi-envelope-at-fill cont-icon"></i>
                            <p>favoregwele@gmail.com</p>
                        </div>
                    </a>

                </div>
            </div>
        </div>, 
        document.getElementById("modal-root")
    );
}

export default ContactCard;