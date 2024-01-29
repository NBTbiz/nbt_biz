import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What Is Digital Marketing?',
      answer: "Digital Marketing , Also Referred As Online Marketing, Is The Process Of Promoting Brands To Prospective Consumers Through The Internet And Other Digital Media. This Covers Text And Multimedia Messaging As Well As Social Media, Web-Based, Email, And Other Marketing Channels."
    },
    {
      question: 'What Are Digital Marketing Strategies?',
      answer: 'A Digital Marketing Strategy Is A Plan For Using Online Channels To Establish An Internet Presence And Achieve Specific Marketing Objectives. These Channels May Consist Of Your Website, Social Media, Paid Advertisements, Organic Search, And Other Web-Based PlatforMS.'
    },
    {
      question: 'What Are The Benefits Of Integrating A Digital Marketing Strategy Into A Business? ',
      answer: "It Helps You Comprehend Your Market Share More Clearly. You Run The Risk Of Underestimating The Demand For Your Digital Services If You Don'T Have A Defined Approach. Furthermore, It'S Possible That You Won'T Have A Thorough Understanding Of The Characteristics Of The Internet Market, Such As Rival Profiles, Customer Behavior, And Customer Profiles."
    },
    {
      question: 'What Does A Good Digital Marketing Strategy Help The Business To Get? ',
      answer: 'Overall, A Well-Designed Digital Marketing Strategy May Assist Businesses In Achieving Your Marketing Objectives, Increasing Visibility And Brand Awareness, Generating Leads And Sales, And Ultimately Growing Their Business.'
    },
    {
      question: 'What Are The Benefits Of Digital Marketing For Business? \n Benefits Of Digital Marketing Over Traditional Marketing ',
      answer: `Better Brand Awareness.
      Wide Customer Reach.
      Increased Customer Engagement.
      Real-Time Customer Feedback.
      Data-Driven Decision-Making.
      Greater Market Share.
      Cost-Effectiveness.
      High Return on Investment (ROI)
      `
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
