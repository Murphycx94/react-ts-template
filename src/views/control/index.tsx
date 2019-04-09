import * as React from 'react';
import { BASE_URL, COMPILE_DATE } from '../../config';
import http from '../../api';
import './index.less';

interface InfoItem {
  label: string,
  value: string
};

interface PageState {
  infoList: InfoItem[];
}

class Index extends React.Component<{}, PageState> {

  public constructor (props: any) {
    super(props);
    this.state = {
      infoList: [
        { label: '当前API', value: BASE_URL }
      ]
    }
  }

  public componentDidMount () {
    http.get('jrzj/momentList', { limit: 20, type: 'createTime', LastId: 0 })
      .then((res:any) => {
        console.log(res)
      });
    this.setState(({ infoList }) => {
      infoList.push({ label: '编译日期', value: COMPILE_DATE });
      return {
        infoList
      }
    });
  }

  public render() {

    const { infoList } = this.state;

    return (
      <div className="control">
        <h2 className="control-header">控制台</h2>
        <ul className="control-infos">
          {
            infoList.length &&
            infoList.map(item => (
              <li className="info-item" key={item.label}>
                <p className="info-item_label">
                  {item.label}
                </p>
                <p className="info-item_value">
                  {item.value}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Index;
