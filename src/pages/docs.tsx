import { init, plugins, common, skeleton } from '@alilc/lowcode-engine';
import React, { useEffect, useState } from 'react';

const DocsPage = () => {
    const [hasPluginInited, setHasPluginInited] = useState(false);

    useEffect(() => {
        plugins.init().then(() => {
            setHasPluginInited(true)
        }).catch(err => console.error(err))
    }, []);

    if (!hasPluginInited) {
        return null;
    }

    return (
        <common.skeletonCabin.Workbench
            skeleton={skeleton}
        />
    );
/*




    useEffect(() => {
        const preference = new Map();
        (async function main() {
            console.log('first-2')
            init(
                document.getElementById('engine-container')!, {
                    // designMode: 'live',
                    // locale: 'zh-CN',
                    enableCondition: true,
                    enableCanvasLock: true,
                    // 默认绑定变量
                    supportVariableGlobally: true,
                    // simulatorUrl 在当 engine-core.js 同一个父路径下时是不需要配置的！！！
                    // 这里因为用的是 alifd cdn，在不同 npm 包，engine-core.js 和 react-simulator-renderer.js 是不同路径
                    simulatorUrl: [
                        'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/css/react-simulator-renderer.css',
                        'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/js/react-simulator-renderer.js',
                    ],
                    requestHandlersMap: {
                        fetch: async () => {}
                    }
                },
                preference,
            );
        })();
    }, []);
  return (
    <div id='engine-container' style={{backgroundColor: 'red'}}></div>
  );*/
};

export default DocsPage;
