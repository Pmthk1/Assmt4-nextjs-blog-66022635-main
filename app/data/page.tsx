import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
      {/* โครงสร้าง Layout */}
      <div className="grid grid-cols-2 gap-8 w-4/5">
        {/* คอลัมน์ซ้าย */}
        <div>
          {/* โปรไฟล์ */}
          <div className="text-center mb-8">
            <div className="relative w-52 h-52 mx-auto">
              <Image
                src="/image/2.jpeg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-white shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-[6px] border-blue-500"></div>
            </div>
            <p className="text-2xl font-bold mt-4">Chukkarin Junchang</p>
          </div>

          {/* การศึกษา */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">Education</p>
            <p>University of Phayao</p>
          </div>

          {/* ทักษะ */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">Skills</p>
            <ul className="list-disc pl-5">
              <li>Programming: JavaScript, Python</li>
              <li>Web Development: HTML, CSS, React, Next.js</li>
              <li>Team Collaboration</li>
            </ul>
          </div>

          {/* การติดต่อ */}
          <div className="p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">Contact</p>
            <p>Facebook : Chukkarin Junchang</p>
            <p>Instagram : chukkarin_junchang</p>
            <p>Email: 66022455@up.ac.th</p>
            <p>Phone: 061-490-3790</p>
          </div>
        </div>

        {/* คอลัมน์ขวา */}
        <div>
          {/* Content Creator */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <h3 className="text-xl font-bold">Content Creator</h3>
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
            <p className="text-2xl font-bold">Experience</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>โครงการทำบุญคณะและไหว้ครู คณะเทคโนโลยีสารสนเทศและการสื่อสาร</strong> 5 กรกฎาคม พ.ศ. 2566
              </li>
              <li className="mt-2">
                <strong>โครงการประกวดทูตวัฒนธรรมเวียง ประจำปีการศึกษา 2566</strong> 8 กรกฎาคม พ.ศ. 2566
              </li>
              <li className="mt-2">
                <strong>	ประเพณีเดินเข้า ม ประจำปี 2566</strong> 16 กรกฎาคม พ.ศ. 2566
              </li>
              <li className="mt-2">
                <strong>	โครงการประกวดขับร้องเพลงลูกทุ่งและคอนเสิร์ต</strong> 9 กรกฎาคม พ.ศ. 2566
              </li>
              <li className="mt-2">
                <strong> กิจกรรม ICT สืบสานลอยประทีปล้านนา</strong> 23 พฤศจิกายน พ.ศ. 2566
              </li>
              <li className="mt-2">
                <strong> การพัฒนาบุคลิกภาพ </strong> 23 มกราคม พ.ศ. 2567
              </li>
              <li className="mt-2">
                <strong> ความรู้โทษ พิภัย และกฎหมายที่เกี่ยวข้องกับยาเสพติด</strong> 23 มกราคม พ.ศ. 2567
              </li>
              <li className="mt-2">
                <strong> เมื่องโบราณ เมืองพะเยา</strong> 23 มกราคม พ.ศ. 2567
              </li>
              <li className="mt-2">
                <strong>สิ่งศักดิ์สิทธิ์จองพะเยา</strong> 23 มกราคม พ.ศ. 2567
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
