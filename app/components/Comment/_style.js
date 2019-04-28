import styled from "styled-components";

export const CommentStyle = styled.div`
         // background:red;
         margin-bottom: 50px;
         ._textnoteCounter h4{
            font-size: 23px;
font-weight: 300;
color: #8dabc4;
padding: 24px 0px;
text-align:center;
         }
         ._commentIcon{
             width: 48px;
  height: 48px;
  object-fit: contain;
  margin:auto;
  display:block;
  cursor:pointer;
         }
         ._avatar{
             text-align:center;
             img{
                 height: 55px;
                    border-radius: 16px;
                    border: solid 1px rgba(0, 0, 0, 0.05);
             }
             h4{
                 margin-top:10px;
                 font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
             }
         }

         ._commentBody {
           padding: 24px 32px;
           border-radius: 4px;
           background-color: ${props=> props.bg||"#f9f9fb"};

           p._para{
               font-size: 23px;
           font-weight: normal;
           font-style: normal;
           font-stretch: normal;
           line-height: 1.57;
           letter-spacing: 0.3px;
           color: #292f36;
           margin-bottom:0;
           }
           
         }
         ._commentBody.__commentBody{
               p._para{
                font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.68;
  letter-spacing: normal;
  color: #292f36;
           }
           }
         ul li{
            display: inline-block;
            margin-right: 10px;
            ._date{
                 font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #8dabc4;
            }
            ._source{
                font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #145bbc;
  text-decoration: underline;
            }
            img{
                width: 36px;
  height: 36px;
  border-radius: 12px;
            }
         }`;