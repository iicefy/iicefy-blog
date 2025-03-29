---
title: เปลี่ยน React แอปใหญ่ๆ ให้ย่อยง่ายด้วย Microfrontend
description: Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce. Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks. If you need a website that loads fast and has great SEO, then Astro is for you.
tags:
  - Dev
  - Astro
  - Web
pubDate: 2024-12-03
draft: true
---

## ทำไมต้องใช้ Microfrontend

แอปพลิเคชัน frontend ที่มีขนาดใหญ่ขึ้นเรื่อยๆ อาจทำให้เกิดความยุ่งยากในการพัฒนา การบำรุงรักษา และการ deploy ระบบทั้งหมด โดยเฉพาะเมื่อทีมพัฒนามีหลายทีมที่ต้องทำงานร่วมกัน การใช้ Microfrontend เป็นวิธีการที่ช่วยแบ่งแอปพลิเคชันขนาดใหญ่ๆ ออกเป็น module ย่อยๆ ที่พัฒนาและดีพลอยแยกกันได้ง่ายขึ้น ทำให้การพัฒนามีความยืดหยุ่นและสามารถทำงานได้เร็วขึ้น

## Microfrontend คืออะไร?

Microfrontend คือแนวคิดในการแบ่งแอปพลิเคชัน frontend ขนาดใหญ่ ๆ ออกเป็น module ย่อย ๆ ที่สามารถ dev และ deploy แยกจากกันได้ ซึ่งแต่ละส่วนสามารถพัฒนาโดยทีมที่แตกต่างกัน และยังสามารถใช้เทคโนโลยีหรือเฟรมเวิร์กต่าง ๆ ได้ โดยไม่กระทบต่อการทำงานของระบบหลัก

โดยที่:

- App Shell คือส่วนที่เป็นโครงสร้างหลักของแอปพลิเคชัน
- Microfrontend คือ module ย่อยๆ ที่จะถูกโหลดและจัดการแยกกันในแอปพลิเคชันหลัก
- Lazy Loading ช่วยให้โหลดแต่ละ Microfrontend เมื่อจำเป็น เพื่อเพิ่มประสิทธิภาพในการใช้งาน

### ข้อดีของการใช้ Microfrontends

- แยกส่วนได้ชัดเจน: แยกแต่ละโดเมนให้มีหน้าที่ต่างกันอย่างชัดเจน แต่ละทีมสามารถพัฒนาแยกกันได้
- การจัดการที่ยืดหยุ่น: ทำให้การอัปเดตและบำรุงรักษาง่ายขึ้น โดยที่การแก้ไขโมดูลย่อยจะไม่กระทบกับโมดูลย่อยอื่นๆ
- สามารถใช้หลายเทคโนโลยี: แต่ละโมดูลย่อย มี dependency ที่แยกกันในแต่ละ module

### ข้อเสียของการใช้ Microfrontends

- ความซับซ้อนในการตั้งค่า: การตั้งค่า config หรือเครื่องมือที่ใช้ร่วมกันอาจทำให้การเริ่มต้นยุ่งยาก
- Testing : การทดสอบการทำงานร่วมกันของหลายๆ Microfrontend อาจเป็นเรื่องท้าทาย

___















