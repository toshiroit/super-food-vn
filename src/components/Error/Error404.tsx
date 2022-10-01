import Link from "next/link";

const Error404 = () => {
  return (
    <div className="bdError">
      <div className="image">
        <picture>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--upMfnEaM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg"
            alt="404"
          />
        </picture>
      </div>
      <h2>Oops! Page Not Found</h2>
      <h3>Rất tiếc! Chúng tôi không thể tìm thấy trang mà bạn tìm kiếm</h3>
      <Link href={"/"}>
        <a>
          <button type="button" className="main-btn">
            Quay lại trang chủ
          </button>
        </a>
      </Link>
    </div>
  );
};
export default Error404;
