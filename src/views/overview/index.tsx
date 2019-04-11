import * as React from 'react';
import { Button } from 'antd-mobile';

import './index.less';

interface PageState {
  infoList: number[];
}

class Index extends React.Component<{}, PageState> {

  constructor (props: any) {
    super(props);
    this.state = {
      infoList: [1, 2, 3, 4, 5]
    };
  }
  
  public render() {
    return (
      <div className="overview">
        <header className="overview-header">
          <section className="overview-header_title">
            <h3 className="title-name">小黑哥</h3>
            <p className="title-greetings">夜深了，早点睡吧</p>
          </section>
          <section className="overview-header_controls">
            <a href="#" className="controls-download">下载App</a>
          </section>
        </header>
        <div className="overview-swiper">
          <Button>按钮</Button>
          {/* <Carousel frameOverflow="visible">
            {
              this.state.infoList.map(item => (
                <div className="swiper-item" key={item}>
                  {item}
                </div>
              ))
            }
          </Carousel> */}
        </div>
      </div>
    );
  }
}

export default Index;
