import React, { Component } from "react";
import { View, Text } from "react-native";

const data = [
  {
    title: "Các môn lý luận chính trị",
    courses: [
      "Những nguyên lý cơ bản của chủ nghĩa Mac-Lênin",
      "Đường lối cách mạng của Đảng CSVN",
      "Tư tưởng Hồ Chí Minh"
    ]
  },
  {
    title: "Toán – Tin học – Khoa học tự nhiên",
    courses: [
      "Giải tích",
      "Đại số tuyến tính",
      "Cấu trúc rời rạc",
      "Xác suất thống kê",
      "Nhập môn Lập trình"
    ]
  },
  {
    title: "Ngoại ngữ",
    courses: ["Anh văn 1", "Anh văn 2", "Anh văn 3"]
  },
  {
    title: "Giáo dục thể chất – Giáo dục quốc phòng",
    courses: [
      "Giáo dục thể chất 1",
      "Giáo dục thể chất 2",
      "Giáo dục quốc phòng"
    ]
  },
  {
    title: "Môn học khác",
    courses: ["Kỹ năng nghề nghiệp", "Pháp luật đại cương"]
  }
];

class SchemeTraining extends Component {
  render() {
    let elements = data.map((item, index) => {
      return (
        <View key={index}>
          <Text
            style={{
              backgroundColor: "rgb(139,174,253)",
              textAlign: "center",
              paddingVertical: 7,
              color: "white",
              fontSize: 17
            }}
          >
            {item.title}
          </Text>
          {item.courses.map((course, index) => {
            return (
              <View
                key={index}
                style={{
                  borderTopColor: "rgb(139,174,253)",
                  borderTopWidth: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 15
                }}
              >
                <Text style={{ fontSize: 16 }}>{course}</Text>
              </View>
            );
          })}
        </View>
      );
    });

    return (
      <View
        style={{
          borderColor: "rgb(139,174,253)",
          borderWidth: 2,
          borderRadius: 10,
          overflow: "hidden"
        }}
      >
        {elements}
      </View>
    );
  }
}

export default SchemeTraining;
