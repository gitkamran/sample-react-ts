import { IranMap } from "react-iran-map";
import { mapData } from "../data/mapData";

const Home = () => {
  const selectProvinceHandler = (province: string) => {
    console.log(province);
  };
  return (
    <IranMap
      data={mapData}
      colorRange="30, 70, 181"
      width={600}
      textColor="#000"
      defaultSelectedProvince="tehran"
      deactiveProvinceColor="#eee"
      selectedProvinceColor="#3bcc6d"
      tooltipTitle="تعداد:"
      selectProvinceHandler={selectProvinceHandler}
    />
  );
};

export default Home;
