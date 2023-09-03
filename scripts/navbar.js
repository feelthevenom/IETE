nav = `<header class="header">
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container">
    <!-- Logo on the left -->
    <a class="navbar-brand" href="#">
        <img class="logo" src="../src/logo.png" alt="Logo" width="340" height="60">
    </a>

    <!-- Toggler/collapsing button for small screens -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="../index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./Executive commit.html">Exe committee</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./events.html">Events</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./navbar/membership.html">Membership</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                    Chencon
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="./chencon.html">2022</a>
                    <a class="dropdown-item" href="../src/chencon2022_proceedings.pdf">2021</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                    Chenlink Newsletter
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Vol-1 No.1</a>
                    <a class="dropdown-item" href="#">Vol-1 No.2</a>
                    <a class="dropdown-item" href="#">Vol-1 No.3</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./contact.html">Contact</a>
            </li>
        </ul>
    </div>
</div>
</nav>
</header>
`

document.write(nav)