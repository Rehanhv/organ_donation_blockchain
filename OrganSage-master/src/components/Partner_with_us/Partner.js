import './partner.css';

function Partner() {
    return (
        <>
            <footer>
                <div className="text-center1 p-3" >
                    <div style={{ marginBottom: '1rem' }}>
                        {/* <img src="https://rcmsar.com/wp-content/uploads/Royal-Canadian-Marine-Search-And-Rescue-Footer-Background.jpg" alt="Logo" style={{ width: '150px' }} /> */}
                    </div>
                    <center>
                        <div style={{ marginBottom: '1rem' }} className="ourClass">
                            <p>
                                Address: Kasturi Building, Pelamedu, Coimbatore, Tamil Nadu, India<br />
                                Phone: +91 123-123-1234<br />
                                Email: organ@ngo.com
                            </p>
                        </div>

                        <p style={{ marginBottom: '0', color: '#888' }} className="ourClass">
                            © 2023 Company Name. All rights reserved.
                        </p>
                        <p>
                            <a href="https://github.com/ananya-14-04/OrganD-decentralized-organ-donation-Application" style={{ color: '#fff9f9' }}>Visit the GitHub repo of the project</a>
                        </p>
                    </center>
                </div>
            </footer>

        </>
    );
}

export default Partner;
