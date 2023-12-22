import CodeBlock from "./../components/CodeBlock";
import CodeLine from "./../components/CodeLine";
import TagContents from "../components/TagContents";
import { TagOpen, TagClose } from "./../components/Tags";

import CircleSvg from "../components/CircleSvg";
import style from "./../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={style.circle}>
        <img
          className={style.memoji}
          src={`${process.env.PUBLIC_URL}/images/memogi.png`}
          alt="memoji"
        />
        <div className={style.circle_text_box}>
          <CircleSvg
            className={style.circle_svg}
            width={"155%"}
            height={"155%"}
          />
        </div>
      </div>

      <CodeBlock>
        <CodeLine>
          <TagOpen tagname={"html"} attr={"lang"} attrValue={'"ko"'} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"head"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"title"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            {" "}
            안녕하세요, 프론트엔드 개발자 조원석입니다! 👩‍💻
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"title"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"head"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"body"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen
            tagname={"heaeder"}
            attr={"class"}
            attrValue={'"자기소개"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            안녕하세요! <br />
            저는 프론트엔드 공부중인 조원석입니다!
          </TagContents>
        </CodeLine>
        <CodeLine>
          <TagContents indent={4}>
            <br />
            데이터가공,처리 위주에 개발을 즐겨하나 프론트(리액트) 공부를 위하여 해당프로젝트 진행하였습니다
            <br />
          </TagContents>
        </CodeLine>
        
        <CodeLine>
          <TagContents indent={4}>
			사용자들은 몰라주지만 간결하고 아름다운 코드와 데이터 처리방식을 보곤 희열을 느끼곤합니다
            <br />
			자동화,모듈화에 진심입니다 
            <br />
            군생활 중 여러 포트폴리오를 만들어 나가는것이 제 목표입니다
            <br />
			  군복무 후 취업을 위한 발판을 많이 만들어 나가겠습니다
            <br />
			  화이팅!~
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"heaeder"} indent={3} />
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagOpen
            tagname={"main"}
            attr={"class"}
            attrValue={'"경험, 그리고 공부중인 것들"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={5}>
            <h4>💻 사용 기술과 경험</h4>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>React, React-Native</em>
              </dt>
              <dd>
                - 각종 Hooks 능숙하게 다룰 수 있으며, 모든 컴포넌트를 함수형으로
                개발합니다.
              </dd>
              <dd>
                - Atomic한 단위의 컴포넌트 개발을 좋아하며, 재사용성과 확장성을
                고려합니다.
              </dd>
              <dd>
                - 컴포넌트의 불필요한 리렌더링 방지를 위하여 useRef, useMemo
                등을 적절하게 사용합니다.
              </dd>
              <dd>
				-React-Native를 사용하여 앱개발을 진행한 적이 있으며 다양한 라이브러리를 사용 할 수 있습니다.
			  </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>Javascript, Node.js</em>
              </dt>
              <dd>
                - API로 받아온 데이터를 프론트 개발 상황에 맞게 적절히
                가공하거나 다룰 수 있습니다.
              </dd>
              <dd>
                - Node.js를 내 손과 발 처럼 사용 할 수 있으며 가장 오래 사용하였습니다.
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>SQL, FileMaker,restAPI</em>
              </dt>
              <dd>
                - noSQL보다는 SQL을 선호하는 편이며 CRUD는 물론 관계,설계,데이터처리를 능숙하게 진행합니다.
              </dd>
              <dd>
                - claris사의 FileMaker Pro라는 데이터베이스기반의 프로그램을 능숙하게 사용가능합니다.
              </dd>
              <dd>
                - API에 관한 지식이 깊고 다양한 데이터활용 능력이 좋습니다.
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine />
        <CodeLine>
          <TagContents indent={5}>
            <h4>✍️ 공부중인 것</h4>
          </TagContents>
        </CodeLine>
        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>GSAP</em>
              </dt>
              <dd>
                - GSAP의 animation, scroll trigger를 활용한 인터랙티브 웹 개발에
                대해 공부중입니다.
              </dd>
				<dt>
                <em>Spring</em>
              </dt>
              <dd>
                - Spring-boot와,JAVA를 활용한 backend 개발에 
				  대해 공부중입니다.
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />

        <CodeLine>
          <TagClose tagname={"main"} indent={3} />
        </CodeLine>
        <CodeLine />

        <CodeLine>
          <TagOpen
            tagname={"footer"}
            attr={"class"}
            attrValue={'"경력 및 교육"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={5}>
            <h4>
              📇 경력
            </h4>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>
                  {"("}주{")"}MITMAS{"("}2022.06 ~ 2023.06{")"}
                </em>
              </dt>
              <dd>
                - 삼성전자,르노코리아 파트너사로 해당부서 IT관련 Q{"&"}A 및 Devops (정직원/사원)
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>
                  {"("}주{")"}티라이프{"("}2020.10 ~ 2021.06{")"}
                </em>
              </dt>
              <dd>
                - 온라인쇼핑몰관리플랫폼개발,쇼핑몰백오피스 및 물류데이터베이스 구축, 
				  마케팅부서를 위한 업무자동화 프로그램개발 , 유지보수 업무 담당 (정직원/사원)
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>
                  {"("}주{")"}미디어코어시스템즈{"("}2019.3 ~ 2020.10{")"}
                </em>
              </dt>
              <dd>- 프론트엔드교육 수강 및 간단한 업무 ,자기개발 (실습생/인턴)</dd>
            </dl>
          </TagContents>
        </CodeLine>

        <CodeLine />
        <CodeLine />
        <CodeLine>
          <TagContents indent={5}>
            <h4>👩‍🎓 교육</h4>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                - 동서울대학교 AI소프트웨어학과 1학년{"("}2021.03 입학 ~
                2021.06 중퇴{")"}
              </dt>
            </dl>
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"footer"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"body"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"html"} />
        </CodeLine>
      </CodeBlock>
    </>
  );
};

export default About;
