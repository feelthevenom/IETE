foot = `<div class="container">
<footer class="py-5" style="padding: 40px;">
  <div class="row">
    <div class="col-6 col-md-2 mb-3">
      <h5>Address:</h5>
            <p>IETE Chennai Centre,<br> No. 37,
            Conran Smith Road Entrance Peters Road,<br>
            Gopalapuram, Chennai - 600 086,<br> Tamil Nadu, India.<br> <br>
            Phone: <a href="tel:044 2835 0773">044 2835 0773</a> <br>
            Email: <a href="mailto:ietechennai@gmail.com">ietechennai@gmail.com</a> <br></p>
    </div>

    <div class="col-6 col-md-2 mb-3">
      <h5>Courses:</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">VLSI</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">5G</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Quantum Computing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Communication</a></li>
      </ul>
    </div>


    <div class="col-md-5 offset-md-1 mb-3">
      <form>
        <h5>Subscribe to our newsletter</h5>
        <p>Monthly digest of what's new and exciting from us.</p>
        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
          <label for="newsletter1" class="visually-hidden">Email address</label>
          <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
          <button class="btn btn-primary" type="button" onclick="myBtn()">Subscribe</button>
        </div>
      </form>
    </div>
  </div>

  <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
    <p>© TEAM_ROCKERZ. All Rights Reserved.</p>
    <ul class="list-unstyled d-flex">
      <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
  </div>
</footer>
</div>`
function myBtn() {
  alert("Submitted");
}
document.write(foot)
