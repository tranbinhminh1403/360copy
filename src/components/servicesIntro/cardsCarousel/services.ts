import contractIcons from "../../../assets/services/contract.png";
import buildingsIcons from "../../../assets/services/buildings.png";
import coupleIcons from "../../../assets/services/couple.png";
import familyIcons from "../../../assets/services/family.png";

export const services = [
    {
      title: "Tư vấn định hướng nghề nghiệp, tái định hướng nghề nghiệp",
        // desc: "Hướng dẫn soạn thảo hợp đồng đúng quy định. Kiểm tra đồng nhất với luật hiện hành.",
      icon: contractIcons, // Assuming this is an icon identifier
      themeColor: "#FF4C4C",
      textColor: "#FFFFFF",
      modalContent: {
        title: "Tư vấn định hướng nghề nghiệp",
        sections: [
          {
            heading: "Tư vấn định hướng nghề nghiệp",
            content: [
              { label: "Đối tượng", text: "Học sinh, sinh viên chuẩn bị chọn ngành học, nghề nghiệp hoặc cần định hướng sau tốt nghiệp." },
              { label: "Quy trình", text: "Đánh giá cá nhân → Tìm hiểu thị trường → Lập kế hoạch nghề nghiệp → Hỗ trợ thực hiện." },
              { label: "Giá trị", text: "Hiểu rõ bản thân, chọn nghề phù hợp, có lộ trình cụ thể, đồng hành phát triển sự nghiệp." }
            ]
          },
          {
            heading: "Tư vấn tái định hướng nghề nghiệp",
            content: [
              { label: "Đối tượng", text: "Người mất đam mê, muốn đổi nghề, bị mất việc, hoặc muốn quay lại thị trường lao động." },
              { label: "Quy trình", text: "Đánh giá hiện trạng → Xác định mục tiêu mới → Lập kế hoạch chuyển đổi → Hỗ trợ thực hiện." },
              { label: "Giá trị", text: "Tận dụng kinh nghiệm cũ, bổ sung kỹ năng mới, tự tin thay đổi nghề, mở rộng cơ hội và cân bằng cuộc sống." }
            ]
          }
        ]
      }
    },
    {
      title: "Cổng thông tin về bảo hiểm xã hội, đóng rút các loại bảo hiểm",
      // desc: "Phổ biến và hướng dẫn áp dụng những quy định mới nhất.",
      icon: coupleIcons,
      themeColor: "#98FB98",
      textColor: "#000000",
      modalContent: {
        title: "Cổng thông tin về bảo hiểm xã hội, đóng rút các loại bảo hiểm",
        sections: [
          {
            heading: "Thông tin về Bảo hiểm Xã hội: Điều kiện, Quyền lợi, Thủ tục, và Xử lý Nợ",
            content: [
              { text: "Điều kiện hưởng và quyền lợi của BHXH 1 lần." },
              { text: "Thủ tục, hồ sơ và quy trình rút BHXH 1 lần tại cơ quan BHXH."},
              { text: "Quyền lợi và mức hưởng BHXH hiện nay cho người lao động." },
              { text: "Các trường hợp bắt buộc đóng BHXH và điều kiện đóng BHXH." },
              { text: "Xử lý trường hợp nợ BHXH và quy trình cắt đóng BHXH." },
              { text: "Điều kiện nhận lương hưu từ BHXH." },
              { text: "Điều kiện, thử tục nhận bảo hiểm thất nghiệp." },
              { text: "Điều kiện, thủ tục nhận chế độ thai sản." },
            ]
          }
        ]
      }
    },
    {
      title: "Cổng thông tin về thuế thu nhập cá nhân quy trình khai và hoàn thuế",
      // desc: "Tư vấn và hướng dẫn khắc phục tranh chấp. Đại diện làm việc với đơn vị liên quan.",
      icon: buildingsIcons,
      themeColor: "#FFA07A",
      textColor: "#FFFFFF",
      modalContent: {
        title: "Cổng thông tin về thuế thu nhập cá nhân quy trình khai và hoàn thuế",
        sections: [
          {
            heading: "Thông tin về Thuế Thu nhập Cá nhân: Điều kiện, Quy trình, và Hướng dẫn",
            content: [
              { text: "Điều kiện và quy trình hoàn thuế TNCN." },
              { text: "Giải đáp thắc mắc, xử lý hồ sơ hoàn thuế bị từ chối."},
              { text: "Hướng dẫn cập nhật hồ sơ và làm hoàn thuế online/offline." },
              { text: "Thủ tục, hồ sơ cần thiết khi khai báo thuế." },
              { text: "Tính thuế và các khoản giảm trừ thuế TNCN." },
            ]
          }
        ]
      }
    },
    {
      title: "Tư vấn xử lý các vấn đề quan hệ lao động trong doanh nghiệp",
      // desc: "Bảo vệ quyền lợi của khách hàng tại tòa án.",
      icon: familyIcons,
      themeColor: "#FFFACD",
      textColor: "#000000",
      modalContent: {
        title: "Tư vấn xử lý các vấn đề quan hệ lao động trong doanh nghiệp",
        sections: [
          {
            heading: "Dịch vụ Tư vấn Quản trị Nhân sự",
            content: [
              { label: "Giải pháp", text: "Phân tích và chiến lược nhân sự. Tuyển dụng, đào tạo và phát triển nhân viên. Thiết kế chính sách lương thưởng, đánh giá hiệu suất. Xây dựng văn hóa doanh nghiệp tích cực. Chuyển đổi số với phần mềm HRM. Quản lý xung đột và thay đổi" },
              { label: "Lợi ích", text: "Tăng hiệu quả làm việc, gắn kết nhân viên, giữ chân nhân tài." },
              { label: "Đối tượng", text: "Doanh nghiệp khởi nghiệp, vừa và nhỏ, tập đoàn tái cấu trúc." }
            ]
          },
          {
            heading: "Chương trình học về tâm lý học trong quan hệ lao động, lãnh đạo doanh nghiệp, hiệu quả kinh doanh và dịch vụ khách hàng",
            content: [
              { label: "", text: "Tâm lý học trong quan hệ lao động: Động lực làm việc, quản lý xung đột, phân tích tính cách nhân viên." },
              { label: "", text: "Tâm lý học trong lãnh đạo doanh nghiệp: Xây dựng niềm tin, quản lý đội nhóm và ra quyết định." },
              { label: "", text: "Nâng cao hiệu quả kinh doanh: Quản lý công việc, sự thay đổi, và ứng dụng tâm lý người tiêu dùng trong marketing." },
              { label: "", text: "Nâng cao chất lượng dịch vụ khách hàng: Hiểu tâm lý khách hàng, đào tạo nhân viên giao tiếp và xử lý phàn nàn." }
            ]
          },
          {
            heading: "Tư vấn xây dựng môi trường làm việc theo tiêu chuẩn ESG",
            content: [
              { label: "Môi trường", text: "Tiết kiệm năng lượng, quản lý chất thải và làm việc từ xa." },
              { label: "Xã hội", text: "Bình đẳng, đa dạng, đào tạo phát triển, chăm sóc sức khỏe và an toàn." },
              { label: "Quản trị", text: "Minh bạch, quản lý đạo đức và tham gia của nhân viên." },
              { label: "Triển khai ESG", text: "Đánh giá hiện trạng, xác định mục tiêu, chiến lược hành động và cải tiến liên tục." }
            ]
          }
        ]
      }
    }
  ];