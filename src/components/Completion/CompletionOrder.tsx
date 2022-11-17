import Link from "next/link";

const CompletionOrder = () => {
  return (
    <div className="completionOrder">
      <div className="completionOrder__inner">
        <div className="image">
          <picture>
            <img src="/images/shopping-options.gif" alt="" />
          </picture>
        </div>
        <div className="text">
          <h4 className="w">THANH TOÁN THÀNH CÔNG</h4>
          <p>
            Đơn hàng của sẽ được xác nhận và giao nhanh chóng nhất - hãy kiểm đơn
            hàng bạn trong giỏ hàng ngay <a>tại đây </a>
          </p>
          <Link href={'/'}>
            <a>
              <button
                style={{
                  padding: '10px',
                  width: '150px',
                  marginTop: '10px',
                  fontWeight: 500,
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#127754',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Trờ về
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>

  )
}
export default CompletionOrder;
