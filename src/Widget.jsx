import Script from "next/script";

export const Widget = () => {
  return (
    <Script id="my-script" type="module">{`
  import { Widget, QatchupService } from 'https://widget.stg.qatchup.com/qatchup.js'

  // QatchupService uses the app ID as a parameter
  const widget = new Widget(new QatchupService('rJ9FKWTxvg5UvGTO3x03VT7TujXxSrzeTMXg'))

  // Inserts an empty div at the end of the body
  // Alternatively, you can specify another container
  const container = document.createElement('div')
  document.body.appendChild(container)

  // Initialize the widget to fetch settings from the backend
  widget.init().then(() => {
    // Renders our application inside the Shadow DOM container
    widget.render({ container })
  }).catch(e => console.error(e))

  // Once the widget is no longer needed, we can clean it up
  // widget.destroy()

  // You can also remove the container if it's no longer needed
  // container.remove()
     `}</Script>
  );
};
