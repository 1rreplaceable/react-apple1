import './App.css';
import {useState} from "react";

function App() {

    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [tit, setTit] = useState(0);

    function change() {
        let copy = [...title];
        if (copy[0] === '남자 코트 추천') {
            copy[0] = '여자 코트 추천';
        } else {
            copy[0] = '남자 코트 추천';
        }
        setTitle(copy);
    }

    function sort() {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            <button onClick={sort}>가나다순정렬</button>
            <button onClick={change}>변경</button>
            {/*<div className="list">*/}
            {/*    <h4>{title[0]} <span style={{cursor: 'pointer'}} onClick={() => {*/}
            {/*        setLike(like + 1)*/}
            {/*    }}>👍</span>{like}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{title[1]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4 onClick={() => {*/}
            {/*        if (modal === true) {*/}
            {/*            setModal(false);*/}
            {/*        } else {*/}
            {/*            setModal(true);*/}
            {/*        }*/}
            {/*    }}>{title[2]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}

            {
                title.map(function (a, i) {
                    return (<div className="list" key={i}>
                        <h4 onClick={() => {
                            setTit(i);
                            setModal(true);
                        }}>{title[i]}<span style={{cursor: 'pointer'}} onClick={() => {
                            let copy = [...like];
                            copy[i]++;
                            setLike(copy);
                        }}>👍</span>{like[i]}</h4>
                        <p>2월 17일 발행</p>
                    </div>)
                })
            }

            {
                modal === true ? <Modal tit={tit} change={change} title={title}/> : null
            }

        </div>
    );
}


function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.title[props.tit]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={props.change}>글수정</button>
        </div>
    )
}

export default App;
