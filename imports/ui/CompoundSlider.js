import React,{Component} from 'react'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'




export function Handle({ // your handle component
    handle: { id, value, percent }, 
    getHandleProps
  }) {
    return (
        <div
            style={{
                left: '${percent}%',
                position: 'absolute',
                marginLeft: -15,
                marginTop: 25,
                zIndex: 2,
                width: 20,
                height: 20,
                border: 0,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#ffa15f',
                color: '#333',
            }}
            {...getHandleProps(id)}
        >
        <div style={{ fontFamily: 'Montserrat', fontSize: 12, marginTop: 28 }}>
          ${value}
        </div>
      </div>
    )
  }



class CompoundSlider extends Component{
    
    render(){
        const sliderStyle = {  // Give the slider some width
            position: 'relative',
            width: '100%',
            height: 80,
            border: 'none',
          }
          
          const railStyle = { 
            position: 'absolute',
            width: '100%',
            height: 3,
            marginTop: 35,
            borderRadius: 5,
            backgroundColor: '#ffc371',
          }
        return(
            <div>
            <Slider
                rootStyle={sliderStyle}
                domain={[0, 100]}
                step={1}
                mode={2}
                values={[0]}
            >
                <Rail>
                {({ getRailProps }) => (  // adding the rail props sets up events on the rail
                    <div style={railStyle} {...getRailProps()} /> 
                )}
                </Rail>
                <Handles>
                {({ handles, getHandleProps }) => (
                    <div className="slider-handles">
                    {handles.map(handle => (
                        <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                        />
                    ))}
                    </div>
                )}
                </Handles>
                
            </Slider>
            </div>
        )
    }
}
export default CompoundSlider