import React from 'react'
import './MyUrl.scss'
import { Button, CircleButton, Container, DifferentText, StatisticCards } from '../../utils/Utils'
import data from '../../data/home.json'
import { FaPlus,FaCopy } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";
import links from '../../data/links.json'
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { TfiLink, TfiUnlink } from "react-icons/tfi";
import { MdOutlineEdit } from "react-icons/md";
import { LuTrash } from "react-icons/lu";
import { AiFillTwitterCircle } from "react-icons/ai";

const MyUrl = () => {
  return (
      <Container>
    <section className='my-url'>
        <h3>Havolalar <DifferentText>statistikasi</DifferentText></h3>
        <StatisticCards data={data} type='line'/>
        <div className="my-url-action__wrapper">
          <h3>Mening <DifferentText>havolalarim</DifferentText><br/><span className='span'>21ta jami link</span></h3>
          <div>
            <form>
              <button><FiSearch/></button>
              <input className='input' type="text"  placeholder='Qidirish'/>
            </form>
            <Button appearence='secondary'><FaPlus/> Qo'shish</Button>
          </div>
        </div>
        <table>
          <thead>
              <tr>
                {
                  Object.keys(links[0]).map((item, index) =>
                    <th key={index}>{item}</th>
                    
                )}
                <th>Amallar</th>
              </tr>
          </thead>
          <tbody>
            {
              links.map((item, index) =>
                <tr key={index}>
                  {
                    Object.values(item).map((item, index) =>
                    index === 0 ? <td className='table-actions' key={index}>{item}<CircleButton type='small'><FaCopy/></CircleButton></td> :
                    index === 2 ? <td className='qr-code' key={index}><BsQrCodeScan/></td> :
                    item.includes("youtube") ? <td key={index}><button className='favicon youtube'><FaYoutube/></button>{item}</td> : item.includes("twitter") ? <td key={index}><button className='favicon twitter'><FaTwitter/></button>{item}</td> : item.includes('Active') ? <td className='table-actions'>{item} <CircleButton type='small'><TfiLink/></CircleButton></td> : item.includes('Inactive') ? <td className='table-actions'>{item} <CircleButton type='small'><TfiUnlink/></CircleButton></td>  : <td key={index}>{item}</td>
                    )}
                    <td className='table-actions'>
                      <CircleButton><MdOutlineEdit/></CircleButton>
                      <CircleButton><LuTrash/></CircleButton>
                    </td>
                </tr>
              )
            }
          </tbody>
        </table>
    </section>
      </Container>
  )
}

export default MyUrl