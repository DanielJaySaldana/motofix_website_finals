MotoFix — Offline XAMPP website

QUICK START
1. Start Apache and MySQL in the XAMPP Control Panel.
2. Import database/motofix.sql in http://localhost/phpmyadmin/ if the database has not been created yet.
3. Open http://localhost/motofix_website_finals/.

You can also run “Start MotoFix.bat” from this folder to open XAMPP Control Panel and the website.

The promotional page is assembled from source/promotional/*.html. Each section keeps its
own stylesheet in source/src/promotional/*.css. Shared styles are in shared.css, and
interactive behavior is in source/src/promotional/promotion.js. The XAMPP page loads the
local promotional artwork, fonts, video, and separated section stylesheets; it does not need internet access.

Feedback submissions are saved on this computer in the motofix_promotional database,
inside the feedback_submissions table. They are not sent to an online service. XAMPP's
default MySQL user (root with no password) is configured in config/database.php.

The bundled interactive MotoFix demo is available from all three promotional buttons.
In XAMPP, accounts, passwords, role-specific records, support tickets, and uploaded files
are stored in the local MySQL database. Payments and third-party integrations remain
simulations; Google sign-in and email delivery need online service credentials.

SOURCE AND STATIC PREVIEW
source/ contains the separated, editable HTML and CSS sources. website/ contains the
published offline files and original assets. The original Python presentation server
uses the published browser-only demo; the XAMPP version at the workspace root adds the
local database services.
