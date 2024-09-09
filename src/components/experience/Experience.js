import React from 'react'

function Experience() {
  return (
    <div>
      <h5>EXPERIENCE</h5>
      <hr />
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Symphonize <span style={{ fontWeight: 'normal', fontSize: '15px' }}> | React Native, Typescript</span></h3>
          <span style={{ fontWeight: 'normal', fontSize: '15px' }}>Sep 2023 - Present</span>
        </div>
        <h4>Real Estate Employee App</h4>
        <ul>
          <li>• Developed and maintained a mobile application for internal company use, focusing on enhancing employee workflows</li>
          <li>• Implemented camera functionalities, enabling users to capture and upload images directly through the mobile app</li>
          <li>• Integrated APIs for seamless data transfer, ensuring efficient communication between the mobile app and server</li>
          <li>• Designed and optimized background jobs to handle photo uploads and messaging even when the app is running in the background</li>
          <li>• Worked on the UI/UX of the application, ensuring a responsive and user-friendly experience across devices</li>
        </ul>
      </div>
      <div>
        <h4>MDT Mobile App</h4>
        <ul>
          <li>• Crafted intuitive and user-friendly UI components for a mobile application providing security services tailored to the banking
            sector</li>
          <li>• Applied best practices in mobile design to enhance user experience, focusing on ease of navigation and visual clarity
          </li>
          <li>• Engaged in user research and usability testing to gather feedback and iteratively improve the design based on real user needs</li>
          <li>• Successfully created a design that contributed to the app’s security features being more accessible and engaging, leading to
            improved user satisfaction and adoption</li>
        </ul>
      </div>
    </div>
  )
}

export default Experience
