class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
<footer class="container">
    <nav class="fixed-bottom bg-dark">
        <ul class="nav nav-justified align-items-center">
            <a class="nav-link col-2" href="../Navigation/quickAccess.html"><i class="bi bi-hand-index-fill"></i></a>
            <a class="nav-link col-2" href="https://www.waipahuhigh.org/apps/news/index.jsp?id=0"><i class="bi bi-clipboard-fill"></i></a>
            <a class="nav-link col-3" href="../index.html"><button type="button"
                class="btn text-warning bg-primary rounded-circle btn-lg" style="width: 75px; height: 75px;"><i
                    class="bi bi-house h2"></i></button></a>
            <a class="nav-link col-2" href="../Navigation/Calendar.html"><i class="bi bi-calendar-fill"></i></a>
            <a class="nav-link col-2" href="../Navigation/Links.html"><i class="bi bi-link"></i></a>
        </ul>
    </nav>
</footer>  
      `;
    }
}

customElements.define('main-footer', Footer);