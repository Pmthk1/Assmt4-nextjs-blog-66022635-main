import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 text-black flex items-center justify-center px-4">
      {/* Layout Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl p-6 rounded-xl shadow-2xl bg-white bg-opacity-90">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative w-52 h-52 mx-auto">
              <Image
                src="/image/profile1.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
              <div className="absolute inset-0 rounded-full"></div>
            </div>
            <p className="text-3xl font-bold mt-4">Thanakrit Suphamongkhon</p>
          </div>

          {/* Education Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
            <p className="text-2xl font-bold mb-4">ประวัติการศึกษา</p>
            <p className="text-xl font-semibold">University of Phayao</p>
            <p className="mt-2">Faculty of Information and Communication Technology</p>
            <p className="mt-1">Software Engineering</p>
            <p className="mt-4 text-gray-600">2023 - Present</p>
          </div>

          {/* Skills Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
            <p className="text-2xl font-bold mb-4">ทักษะ</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Programming Language: JavaScript, Python</li>
              <li>Web Development: HTML, CSS, React, Next.js</li>
              <li>Team Collaboration</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
            <p className="text-2xl font-bold mb-4">ข้อมูลติดต่อ</p>
            <p>Facebook : Thanakrit Suphamongkhon</p>
            <p>Email: 66022635@up.ac.th</p>
            <p>Phone: 099-891-4553</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 self-start mt-8">
          {/* Personal Background */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
            <p className="text-2xl font-bold mb-4">ข้อมูลแนะนําตัวเอง</p>
            <p>สวัสดีครับ ผมชื่อ นายธนกฤต สุภามงคล ตอนนี้กําลังศึกษาอยู่ชั้นปีที่ 2
              มหาวิทยาลัยพะเยา
            </p>
            <h4 className="text-xl font-bold mt-4">ปีที่ 1:</h4>
            <p>การสร้างพื้นฐานซอร์ฟแวร์...</p>
            <h4 className="text-xl font-bold mt-4">ปีที่ 2:</h4>
            <p>เจาะลึกลงไปในความเชี่ยวชาญเฉพาะทาง...</p>
          </div>

          {/* Experiences */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
            <p className="text-2xl font-bold mb-4">ผลงาน</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                อบรมการใช้ Framework ในการพัฒนาซอฟต์แวร์ส่วนหน้า
              </li>
              <li>
                ทําโปรเจ็ค Front-end: เกี่ยวกับเว็บไซต์ รวมนิยาย NovelVerse
              </li>
              <li>
                ทําโปรเจ็ค เว็บไซต์คำนวณปริมาณอาหารที่เหมาะสมกับ BMI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
