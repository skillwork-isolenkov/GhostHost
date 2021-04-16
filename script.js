window.addEventListener('load', function () {
    let home = document.querySelector('.home-link');
    let domain = document.querySelector('.domain-link');
    let hosting = document.querySelector('.hosting-link');
    let clients = document.querySelector('.clients-link');
    let blog = document.querySelector('.blog-link');
    let support = document.querySelector('.support-link');

    home.addEventListener('click', openHome);
    domain.addEventListener('click', openDomain);
    hosting.addEventListener('click', openHosting);
    clients.addEventListener('click', openClients);
    blog.addEventListener('click', openBlog);
    support.addEventListener('click', openSupport);

    function openHome() {
        window.location.href = './index.html';
    }

    function openDomain() {
        window.location.href = './domain/index.html';
    }

    function openHosting() {
        window.location.href = './hosting/index.html';
    }

    function openClients() {
        window.location.href = './clients/index.html';
    }

    function openBlog() {
        window.location.href = './blog/index.html';
    }

    function openSupport() {
        window.location.href = './support/index.html';
    }
})