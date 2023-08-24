import React from 'react'

export const Tabs = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div>Tabs</div>
  )
}
