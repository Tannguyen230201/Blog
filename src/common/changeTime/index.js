import { Fragment } from "react";

const ChangeTime = (props) => {
  const utcTimeString = props.time;

  // Tạo đối tượng Date từ thời gian UTC
  const utcDate = new Date(utcTimeString);

  // Chuyển đổi về múi giờ Việt Nam (UTC+7)
  const vietnamTime = new Date(utcDate);

  // Lấy thông tin về giờ, phút, giây
  const day = utcDate.getUTCDate();
  const month = utcDate.getUTCMonth() + 1; // Tháng bắt đầu từ 0
  const year = utcDate.getUTCFullYear();
  const hours = vietnamTime.getUTCHours() + 7;
  const minutes = vietnamTime.getUTCMinutes();
  const seconds = vietnamTime.getUTCSeconds();
  const time = `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;  
  return <Fragment>{time}</Fragment>;
};
export default ChangeTime;
