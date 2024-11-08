

const Footer = () => {
  return (
    <div className="py-10 md:py-14 lg:py-20 bg-base-200 px-8 md:px-5">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Gadget Heaven</h3>
        <p className="font-medium text-[#09080F]/60">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr />
      <footer className="footer text-base-content mt-8 md:justify-evenly">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;