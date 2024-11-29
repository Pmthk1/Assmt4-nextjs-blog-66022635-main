import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-300 text-black flex items-center justify-center">
      {/* โครงสร้าง Layout */}
  <div className="grid grid-cols-2 gap-8 w-4/5">
  {/* คอลัมน์ซ้าย */}
  <div>
          {/* โปรไฟล์ */}
          <div className="text-center mb-8">
            <div className="relative w-52 h-52 mx-auto">
              <Image
                src="/image/profile1.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-white shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-[6px] border-blue-500"></div>
            </div>
            <p className="text-2xl font-bold mt-4">Thanakrit Suphamongkhon</p>
          </div>

          {/* การศึกษา */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold mb-4">ประวัติการศึกษา</p>
            <div>
              <p className="text-xl font-semibold">University of Phayao</p>
              <p className="mt-2">Faculty of Information and Communication Technology</p>
              <p className="mt-1">Software Engineering</p>
              <p className="mt-4 text-gray-600">2023 - Present</p>
              </div>
            </div>



          {/* ทักษะ */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">ทักษะ</p>
            <ul className="list-disc pl-5">
              <li>Programming: JavaScript, Python</li>
              <li>Web Development: HTML, CSS, React, Next.js</li>
              <li>Team Collaboration</li>
            </ul>
          </div>

          {/* การติดต่อ */}
          <div className="p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">ข้อมูลติดต่อ</p>
            <p>Facebook : Thanakrit Suphamongkhon</p>
            <p>Email: 66022635@up.ac.th</p>
            <p>Phone: 099-891-4553</p>
          </div>
        </div>

        {/* คอลัมน์ขวา */}
        <div>
          {/* Content Creator */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <h3 className="text-xl font-bold">ข้อมูลความเป็นมาเกี่ยวกับการศึกษา</h3>
            <p>
            การเริ่มต้นเส้นทางการศึกษาที่มหาวิทยาลัยพะเยา รู้สึกตื่นเต้นแต่กังวลเมื่อก้าวเข้าสู่ช่วงใหม่ของชีวิต
            </p>

            <p className= "text-xl font-bold">
              ปีที่ 1 : การสร้างพื้นฐานซอร์ฟแวร์ 
            </p>

            <p>
              เริ่มต้นด้วยหลักสูตรพื้นฐานที่เสริมสร้างความรู้ของในวิชาที่จําเป็น เช่น ความรู้เบื้องต้นเกี่ยวกับการเขียนโปรแกรมและคณิตศาสตร์สําหรับคอมพิวเตอร์ วิชาเหล่านี้พื้นฐานสําหรับความเข้าใจของเกี่ยวกับอัลกอริทึมและเทคนิคการแก้ปัญหา
            </p>

            <p className ="text-xl font-bold">
              ปีที่ 2 : เจาะลึกลงไปในความเชี่ยวชาญเฉพาะทาง
            </p>

            <p>
            ในฐานะนักศึกษาปีที่สองฉันมีความชัดเจนมากขึ้นเกี่ยวกับเป้าหมายทางวิชาการและอาชีพของตนเอง
            </p>
          </div>

          {/* ประสบการณ์ */}
          <div className="p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">ประสบการณ์</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>อบรมการใช้ framework ในการพัฒนาซอฟต์แวร์ส่วนหน้า 20-21 มกราคม 2567</strong>
              </li>
              <li>
                <strong>ทําโปรเจ็ค front-end เขียนเว็บไซต์เกี่ยวกับ NovelVerse :รวมนิยาย ช่วง ปี1 เทอม 2 </strong>
              </li>
              <li>
                <strong>ทําโปรเจ็คออกแบบเขียนเว็บไซต์คํานวณปริมาณอาหารที่เหมาะสมกับค่า bmi ช่วง ปี 2 เทอม 1 </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
