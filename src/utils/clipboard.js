import { Message } from 'element-ui'
import Clipboard from 'clipboard'

export const handleClipboard = function (text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    Message.success('复制成功！')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    Message.error('复制失败，请重新尝试！')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
