import CodeBlock from './../components/CodeBlock';
import CodeLine from './../components/CodeLine';
import EmailForm from "./../components/EmailForm";

import style from './../styles/Contact.module.css';

const Contact = () => {
  const socialItems = [
    {
      social: 'email',
      link: 'jws020501@naver.com',
      href: 'mailto:jws020501@naver.com',
    },
    {
      social: 'github',
      link: 'jws020501',
      href: 'https://github.com/jws020501',
    },
    {
      social: 'instagram',
      link: '2.__.seok_0',
      href: 'https://www.instagram.com/s.__.eok_0/',
    },
    {
      social: 'blog',
      link: '@jws020501',
      href: 'https://velog.io/@jws020501',
    },
    {
      social: 'kakao',
      link: 'kakao open chat',
      href: 'https://open.kakao.com/o/'
    }
  ]
  return (
    <>
      <h2 className={style.contact_tit}>Contact with me! 🤙</h2>
      <div className={`${style.contact_item}`}>
        <CodeBlock>
          <CodeLine>
            <span className={style.socials}>.socials</span> {'{'}
          </CodeLine>
          {
            socialItems.map((item, idx) => {
              return (
                <CodeLine key={idx}>
                  <span className={style.social_item}>{item.social}:</span>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                  <span>;</span>
                </CodeLine>
              )
            })
          }
          <CodeLine>{'}'}</CodeLine>
        </CodeBlock>
      </div>
      <div className={`${style.contact_item}`}>
        <EmailForm />
      </div>
    </>
  )
}

export default Contact;