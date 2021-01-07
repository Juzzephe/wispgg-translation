var transplationMap = [

    [
        "*",
        [
            ["body > div > div.content-wrapper.container > section.content-header.flex-column.flex-lg-row.d-flex.align-items-center > div.flex-grow-1 > h1", "Your Servers<small>Servers you have access to.</small>", "Deine Server<small>Server auf die du Zugriff hast.</small>"],
            ["body > div > div.content-wrapper.container > section.content-header.flex-column.flex-lg-row.d-flex.align-items-center > div.flex-grow-1 > h1", "Your Account<small>Manage your account details.</small>", "Dein Konto<small>Verwalte deine Konto informationen.</small>"],
            ["body > div > div.content-wrapper.container > section.content-header.flex-column.flex-lg-row.d-flex.align-items-center > div.flex-grow-1 > h1", "Account Security<small>Control active sessions and 2-Factor Authentication.</small>", "Konto sicherheit<small>Verwalte aktive Sitzungen und 2Faktor-Authentifizierung.</small>"],
            ["body > div > div.content-wrapper.container > section.content-header.flex-column.flex-lg-row.d-flex.align-items-center > div.flex-grow-1 > h1", "Server Console<small>Control your server in real time.</small>", "Server Console <small>Verwalte dein server in Echtzeit.</small>"],
            ["body > div > div.content-wrapper.container > section.content-header.flex-column.flex-lg-row.d-flex.align-items-center > div.flex-grow-1 > h1", "Server Details<small>See details about your game server.</small>", "Server Details <small>Siehe details über dein Server.</small>"],
        
            ["#topnav > ul > li:nth-child(1) > a", "My Servers", "Meine Server"],
            ["#topnav > ul > li:nth-child(2) > a", "My Account", "Konto"],
            ["#topnav > ul > li:nth-child(3) > a", "Security Controls", "Sicherheitseinstellungen"],

            ["#topnav > ul", "System", "System ⌄"],
            ["#topnav > ul", "Management", "Management ⌄"],
            ["#topnav > ul", "Configuration", "Konfiguration ⌄"],
            ["#topnav > ul", "Tools", "Tools ⌄"],
                
            ["#topnav > ul", "Administrate", "Admin"],
        ]
    ],


    
    
    [
        "/",
        [
            ["body > div > div.content-wrapper.container > section.content > div.row.justify-content-center", "Manage", "Verwalten"],
            ["body > div > div.content-wrapper.container > section.content > div.row.justify-content-center", "Memory", "RAM"],
            ["body > div > div.content-wrapper.container > section.content > div.row.justify-content-center", "Players", "Spieler"],
        ]
    ],

    [
        "*",
        [
            ["body > div > div.content-wrapper.container > section.content > form > div > div > div > div.box-body", "Server name visible in the panel, max chars: 32.", "Servername ist nur auf der Startseite sichtbar. Maximale zeichenlänge 32."],
            ["body > div > div.content-wrapper.container > section.content > form > div > div > div > div.box-body", "<b>Note:</b> This doesn't change the actual server hostname, only how its identified in the panel.</p>", "<b>Beachte:</b> Das ändert nicht den aktuellen Hostnamen und dient nur zur indetifikation auf der Startseite.</p>"],
            ["body > div > div.content-wrapper.container > section.content > form > div > div > div > div.box-body", "Update Server Name", "Servernamen aktualisieren"],
        ]
    ],

    

    ["/auth/login",
        [
            [".alert", "Email sent!", "Email gesendet!"],
            ["#resetForm", "Locate", "Senden"],
            ["#resetForm", "Back to Login", "Zurück zum login"],
            ["#loginForm", "Sign In", "Login"],
            [".forgot", "Struggling to login?", "Probleme mit login?"],
        ]
    ],

    ["/account",
        [
            [".row", "First Name", "Vorname"],
            [".row", "Last Name", "Nachname"],
            [".row", "Update Identity", "Persönliche Informationen aktualisieren"],
            [".row", "Update Password", "Passwort aktualisieren"],
            [".row", "Current Password", "Aktuales Passwort"],
            [".row", "Repeat New Password", "Passwort bestätigen"],
            [".row", "New Password", "Neues Passwort"],
            [".row", "Update Email Address", "E-Mail Adresse ändern"],
            [".row", "New Email Address", "Neue E-Mail Adresse"],
            [".row", "Current Password", "Aktuelles Passwort"],
            [".row", "Passwords must contain at least one uppercase, lowercase, and numeric character and must be at least 8 characters in length.", "Passwörter müssen mindestens ein GROßBUCHSTABEN, kleinbuchstaben und eine Zahl enthalten und mindestans 8 Zeichen lang sein."],
        ]
    ]
]

for (var item in transplationMap) {

    if (transplationMap[item][0] == "*" || window.location.pathname == transplationMap[item][0]) {
        for (var translationItems in transplationMap[item][1])
            if (document.querySelector(transplationMap[item][1][translationItems][0]) != null) {
                document.querySelector(transplationMap[item][1][translationItems][0]).innerHTML = document.querySelector(transplationMap[item][1][translationItems][0]).innerHTML.replaceAll(transplationMap[item][1][translationItems][1], transplationMap[item][1][translationItems][2]);
            }
    }
}


console.log("Translatedd by Hostless.de");
