import React, { useState } from 'react'
import styles from './privacypolicy.module.css';

export default function MojServis() {
    return (
        <div>
            <h1>Moj servis</h1>
        </div>
    )
}

export function MojServisDeleteAccount() {
    const [language, setLanguage] = useState(true);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <div style={{ maxWidth: '300px' }}>
                <div
                    className='main-button'
                    onClick={() => setLanguage(!language)}
                >
                    ENG/SRB
                </div>
                {language ?
                    <div>
                        <h1>Moj servis brisanje naloga</h1>
                        <h3>
                            Ukoliko želite da obrišete nalog i sve vaše podatke sa aplikacije to možete uraditi u aplikaciji tako što odete na tab Profil.
                            Na vrhu ćete naći padajući meni koji kada kliknete dobićete opciju da obrišete nalog.
                        </h3>
                        <h3>
                            Nalog takođe možete obrisati tako što se direktno javite podršci putem ovog mejla: filipnikolicdev@gmail.com
                        </h3>
                        <h3>
                            Nakon brisanja, vaši podaci se NE čuvaju nigde.
                        </h3>
                    </div>
                    :
                    <div>
                        <h1>Moj Servis account deletion</h1>
                        <h3>
                            If you wish to delete your account and all your data from the app, you can do so within the app by going to the Profile tab.
                            At the top, you will find a dropdown menu that, when clicked, will give you the option to delete your account.
                        </h3>
                        <h3>
                            You can also delete your account by directly contacting support via this email: filipnikolicdev@gmail.com
                        </h3>
                        <h3>
                            After deletion, your data is NOT stored anywhere.
                        </h3>
                    </div>
                }
            </div>
        </div>
    )
}

export function MojServisPrivacyPolicy() {
    const [language, setLanguage] = useState(true);

    return (
        <div>
            {language ?
                <div className={styles.container}>
                    <div
                        className='main-button'
                        onClick={() => setLanguage(!language)}
                    >
                        ENG/SRB
                    </div>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.intro}>
                        Your privacy is important to us. This privacy policy outlines how we collect, use, and protect your email address.
                    </p>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Information We Collect</h2>
                        <p>
                            We only collect your email address when you register or sign in to our app. This is the only personal information we collect.
                        </p>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>How We Use Your Information</h2>
                        <p>
                            Your email address is used exclusively for the purpose of account management, communication, and notifications related to the app.
                        </p>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>How We Protect Your Information</h2>
                        <p>
                            We take reasonable security measures to protect your email address and ensure it is stored safely. Your email will never be shared with third parties without your consent.
                        </p>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Your Rights</h2>
                        <p>
                            You can contact us at any time to update, delete, or request information regarding your email address.
                        </p>
                    </section>
                    <footer className={styles.footer}>
                        <p>&copy; {new Date().getFullYear()} Moj Servis. All rights reserved.</p>
                    </footer>
                </div>
                :
                <div className={styles.container}>
                    <div
                        className='main-button'
                        onClick={() => setLanguage(!language)}
                    >
                        ENG/SRB
                    </div>
                    <h1 className={styles.title}>Politika privatnosti</h1>
                    <p className={styles.intro}>
                        Vaša privatnost nam je važna. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vašu email adresu.
                    </p>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Informacije koje prikupljamo</h2>
                        <p>
                            Prikupljamo samo vašu email adresu kada se registrujete ili prijavite na našu aplikaciju. Ovo je jedini lični podatak koji prikupljamo.
                        </p>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Kako koristimo vaše informacije</h2>
                        <p>
                            Vaša email adresa se koristi isključivo u svrhu upravljanja nalogom, komunikacije i obaveštenja vezanih za aplikaciju.
                        </p>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Kako štitimo vaše informacije</h2>
                        <p>
                            Preduzimamo odgovarajuće sigurnosne mere kako bismo zaštitili vašu email adresu i osigurali da bude sigurno pohranjena. Vaša email adresa neće biti podeljena sa trećim stranama bez vašeg pristanka.
                        </p>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.subheading}>Vaša prava</h2>
                        <p>
                            Možete nas kontaktirati u bilo kom trenutku kako biste ažurirali, obrisali ili zatražili informacije u vezi sa vašom email adresom.
                        </p>
                    </section>
                    <footer className={styles.footer}>
                        <p>&copy; {new Date().getFullYear()} Moj Servis. Sva prava zadržana.</p>
                    </footer>
                </div>
            }
        </div>
    );
}