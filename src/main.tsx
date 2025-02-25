import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './theme/ThemeContext'
import './index.css'
import { Button } from './components/base/Button/Button'
import { Input } from './components/base/Input/Input'
import { Slider } from './components/base/Slider/Slider'
import { GradientSlider } from './components/advance/GradientSlider/GradientSlider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
          My Component Library
        </h1>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
            基础组件
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>按钮</h3>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Button primary>主要按钮</Button>
                <Button>次要按钮</Button>
                <Button size="small">小按钮</Button>
                <Button size="large">大按钮</Button>
                <Button disabled>禁用按钮</Button>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>输入框</h3>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Input placeholder="请输入内容" />
                <Input disabled placeholder="禁用状态" />
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>滑块</h3>
              <div style={{ maxWidth: '300px' }}>
                <Slider defaultValue={30} />
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
            高级组件
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>渐变滑块</h3>
              <div style={{ maxWidth: '300px' }}>
                <GradientSlider
                  defaultValue={50}
                  startColor="#ff4081"
                  endColor="#7c4dff"
                  marks={{
                    0: '0%',
                    25: '25%',
                    50: '50%',
                    75: '75%',
                    100: '100%',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
)
