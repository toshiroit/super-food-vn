import { selectProductSliceData, selectProductSliceDataAll, selectProductSliceLoading } from "@/redux/features/product/product-selects";
import { useAppSelector } from "@/redux/hooks/hooks";
import { ProductContentData } from "@/types/product/product";
import { useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";

const ProductDetailContent = () => {
  const data = useAppSelector(selectProductSliceData)
  const loading = useAppSelector(selectProductSliceLoading)
  const [isActiveShow, setIsActiveShow] = useState<number>(1);
  const dataFk = [
    {
      title: "Mô tả",
      content: data && data.description,
      isActive: 1,
    },
    {
      title: "Hướng dẫn sử dung",
      content: data && data.guide,
      isActive: 2,
    },
    {
      title: "Trả hàng",
      content: data && data.return,
      isActive: 3,
    },
    {
      title: "Lưu ý ",
      content: data && data.note,
      isActive: 4,
    },
  ];
  const selectText = (value: ProductContentData[]) => {
    let result = value.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => setIsActiveShow(item.isActive)}
          className="table__select___item"
        >
          {item.title}
        </li>
      );
    });
    return result;
  };
  const contentText = (value: ProductContentData[]) => {
    let result = value.map((item, index) => {
      if (item.isActive === isActiveShow) {
        return <p key={index}>{item.content}</p>;
      }
    });
    return result;
  };
  return (
    <>
      {
        !data && loading ? <>
          <LoadingSpinner
            css={{ margin: 'auto', textAlign: 'center', width: '100%' }}
          />
        </> :
          <>
            <div className="title">
              <h4>
                <i className="fa-solid fa-book" /> Thông tin và hướng dẫn sử dụng
              </h4>
            </div>
            <div className="table">
              <ul className="table__select">{selectText(dataFk)}</ul>
              <div className="table__content">{contentText(dataFk)}</div>
            </div>
          </>
      }
    </>
  );
};
export default ProductDetailContent;
