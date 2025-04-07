import { useEffect, useState } from "react";
import Script from "next/script";

export const Widget = () => {
  return (
    <Script id="my-script" type="module">{`
      import {Widget, QatchupService} from 'https://widget.stg.qatchup.com/qatchup.js'

      const container = document.createElement('div')
      document.body.appendChild(container)

      const widget = new Widget(new QatchupService('rJ9FKWTxvg5UvGTO3x03VT7TujXxSrzeTMXg'))

      widget.render({container}).catch(e => console.error(e))
     `}</Script>
  );
};
