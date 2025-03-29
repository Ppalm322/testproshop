// import axios from "axios";

// const callApi = async () => {
//   await axios.get("https://dummyjson.com/products")
//   .then((res) => {
//     console.log(res.data)
//   })
// }

// callApi();

import { ref } from "vue";

export function useForm() {
  const responseMessage = ref("");

  const submitForm = async (name, Email, Phone, Type, Discription) => {
    try {
      const response = await fetch("http://127.0.0.1:8000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, Email, Phone, Type, Discription }),
      });

      const result = await response.json();
      responseMessage.value = result.message;

      console.log(name, Email, Phone, Type, Discription);
    } catch (error) {
      console.error("Error:", error);
      responseMessage.value = "Error submitting form";
      Discription = "error";
      console.log(name, Email, Phone, Type, Discription);
    }
  };

  return { responseMessage, submitForm };
}

// import { useForm, useField } from 'vee-validate'
// import * as yup from 'yup'

// // สร้าง Schema Validation
// const schema = yup.object({
//   name: yup.string().required('กรุณากรอกชื่อ'),
//   email: yup.string().email('อีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมล'),
//   age: yup.number().min(18, 'อายุขั้นต่ำคือ 18 ปี').required('กรุณากรอกอายุ')
// })

// // สร้างฟอร์ม
// const { handleSubmit } = useForm({ validationSchema: schema })
// name: yup.string().required('กรุณากรอกชื่อ'),
// Discription: yup.string().required('กรุณากรอกที่อยู่'),
// Email: yup.string().email('อีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมล'),
// Type: yup.number().min(18, 'อายุขั้นต่ำคือ 20 ปี').required('กรุณากรอกอายุ'),
// Phone: yup.number().min(18, 'อายุขั้นต่ำคือ 18 ปี').required('กรุณากรอกอายุ')

// // ฟังก์ชันส่งฟอร์ม
// const onSubmit = handleSubmit(values => {
//   console.log('✅ ส่งฟอร์มสำเร็จ:', values)
// sfd2@gmail.com
// })

// plugins/axios.js

import axios from "axios";
const API_URL = "https://dummyjson.com";
// const API_URL = "http://127.0.0.1:8000";
// http://127.0.0.1:8000
export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: API_URL, // เปลี่ยนเป็น URL ของ API ของคุณ
    headers: {
      "Content-Type": "application/json",
    },
  });

  // ตัวอย่างการตั้งค่าการดึงข้อมูล
  nuxtApp.provide("axios", api);
});

// const API_URL = "https://dummyjson.com/products";

//  async function getData() {
//     try{
//         const responst = await axios.get(API_URL)
//         console.log("✅ GET:", responst.data);
//     }
//     catch (error) {
//         console.error("❌ Error:", error);
//       }

//  }
// //  getData();
// async function createData() {
//     try {
//       const response = await axios.post(API_URL, {
//         title: "Axios in Node.js",
//         body: "เรียนรู้การใช้งาน Axios ใน Node.js",
//         userId: 1,
//       });
//       console.log("✅ POST:", response.data);
//     } catch (error) {
//       console.error("❌ Error:", error);
//     }
//   }

//   // 3️⃣ ฟังก์ชัน PUT (อัปเดตข้อมูลทั้งหมด)
//   async function updateData(id) {
//     try {
//       const response = await axios.put(`${API_URL}/${id}`, {
//         title: "Updated Title",
//         body: "เนื้อหาถูกอัปเดต",
//         userId: 1,
//       });
//       console.log("✅ PUT:", response.data);
//     } catch (error) {
//       console.error("❌ Error:", error);
//     }
//   }

//   // 4️⃣ ฟังก์ชัน PATCH (อัปเดตบางส่วน)
//   async function patchData(id) {
//     try {
//       const response = await axios.patch(`${API_URL}/${id}`, {
//         title: "Patched Title",
//       });
//       console.log("✅ PATCH:", response.data);
//     } catch (error) {
//       console.error("❌ Error:", error);
//     }
//   }

//   // 5️⃣ ฟังก์ชัน DELETE (ลบข้อมูล)
//   async function deleteData(id) {
//     try {
//       const response = await axios.delete(`${API_URL}/${id}`);
//       console.log("✅ DELETE:", response.data);
//     } catch (error) {
//       console.error("❌ Error:", error);
//     }
//   }

//   // 🚀 ทดสอบฟังก์ชันต่างๆ
// await getData();     // GET
//   await createData();  // POST
//   await updateData(1); // PUT
//   await patchData(1);  // PATCH
//   await deleteData(1); // DELETE
