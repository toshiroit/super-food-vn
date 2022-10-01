import Link from "next/link";

const UserNotifyItem = () => {
  return (
    <Link href={"/"}>
      <a>
        <li className="content__notify___main____item">
          <span className="title">Tin hệ thống </span>
          <div className="image">
            <i className="fa-solid fa-square-envelope fa-size fa-size-mess" />
          </div>
          <div className="ndw">
            <span className="ndw__code">#24719671641751WTU</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              veritatis, molestiae error amet modi beatae dicta placeat
              blanditiis voluptas fuga expedita corrupti totam iste assumenda.
              Ab sunt optio ducimus et. Blanditiis quia atque deserunt
              laudantium, ad saepe dicta esse odit error rem rerum similique
              totam iusto aspernatur provident fugiat reprehenderit nihil dolor
              debitis tenetur nesciunt minima dolorem assumenda? Tenetur,
              eligendi!
            </p>
          </div>
          <div className="info">
            <i className="fa-solid fa-eye fa-size fa-size-show" />
          </div>
        </li>
      </a>
    </Link>
  );
};
export default UserNotifyItem;
