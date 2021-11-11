import React, { useRef, useState } from "react";

export const Name = ({ setValue, setError, placeholder }) => {
  const name = useRef();

  const handleSubmit = () => {
    if (name.current.value !== null) {
      setValue(name.current.value);
    } else {
      // console.log("hello");
      setError("Please Enter Name");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={name}
          className="inputField"
          placeholder={placeholder}
          required={true}
          onChange={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
    </div>
  );
};
export const RegNo = ({ setValue, setError, placeholder  , value }) => {
  const name = useRef();

  const handleSubmit = () => {
    if (name.current.value !== null) {
  console.log("length"  , name.current.value.length)
  console.log("value" , name.current.value)
  

      
      if (  name.current.value.length === 9 ) {
        console.log("state" , value)
        if ( name.current.value.startsWith("21")) {
          setValue(name.current.value);
        } else {
          setError("Only 2021 Batch Students are allowed");
        }
      } else {
        setError("Please Enter Valid Registration Number");
      }
    } else {
      // console.log("hello");
      setError("Please Enter Correct register number");
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={name}
          className="inputField"
          placeholder={placeholder}
          required={true}
          onChange={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
    </div>
  );
};
export const Email = ({ setValue, setError, error, placeholder }) => {
  const email = useRef();

  const handleSubmit = () => {
    if (email.current.value !== null) {
      // console.log("hello")
      if (email.current.value.endsWith("2021@vitstudent.ac.in")) {
        setError(null);
        setValue(email.current.value);
      } else {
        setError("Please Enter Valid VIT Email");
      }
    } else {
      console.log("hello");
      setError("Please Enter Email");
    }
  };
  // console.log(error)
  return (
    <div>
      <input
        ref={email}
        className="inputField"
        placeholder={placeholder}
        type="email"
        onChange={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </div>
  );
};

export const PhoneNo = ({ setValue, setError, placeholder }) => {
  const phoneNo = useRef();
  const pincode = useRef();
  // const answerRef1 = useRef();

  const handleSubmit = () => {
    if (phoneNo.current.value !== null && pincode.current.value !== null) {
      setValue(pincode.current.value.concat(phoneNo.current.value));
    } else {
      setError("Please Enter Phone Number");
    }
  };

  return (
    <div className="d-flex">
      {/* <input
            ref={answerRef1} 
            /> */}
      <input
        ref={pincode}
        style={{ width: "3rem" }}
        className="inputField"
        placeholder="+91"
        // value="+91"
        // defaultValue="+91"
      />
      <input
        ref={phoneNo}
        className="inputField ml-3"
        placeholder={placeholder}
        onChange={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </div>
  );
};

export const Password = ({ setValue, setError, placeholder }) => {
  const password = useRef();
  const confirmPassword = useRef();
  const handleSubmit = () => {
    if (
      password.current.value !== undefined &&
      password.current.value === confirmPassword.current.value &&
      password.current.value.localeCompare(confirmPassword.current.value) !== -1
    ) {
      setError(null);
      if (password.current.value.length >= 6) {
        setValue(password.current.value);
      } else {
        setError("Minimum Six Characters Required");
      }
    } else {
      if (password.current.value !== confirmPassword.current.value) {
        setError("Please Make sure the Two Passwords Match");
      } else {
        setError("Please enter valid Password");
      }
    }
    console.log("1", password.current.value);
    console.log("2", confirmPassword.current.value);
  };

  return (
    <div>
      <input
        ref={password}
        className="inputField mb-5"
        placeholder="Enter Your Password"
        type="password"
        onChange={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
      <input
        ref={confirmPassword}
        className="inputField"
        placeholder="Confirm Password"
        type="password"
        onChange={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </div>
  );
};

export const DomainChoose = ({ setValue, setError }) => {
  const [selected, setSelected] = useState([]);

  const component = {
    Tech: "TECH",
    Management: "MANAGEMENT",
    Design: "DESIGN",
  };

  const onToggle = (domain) => {
    if (selected.includes(component[domain])) {
      // const index = selected.indexOf(component[domain]);

      // setSelected(selected.splice(index,index))
      // selected.splice(index,1)
      setSelected(selected.filter((item) => item !== component[domain]));
    } else {
      // console.log(domain)
      setSelected([...selected, component[domain]]);
    }
  };
  if (selected !== []) {
    console.log(selected);
    setValue(selected);
  }
  // console.log(selected);

  return (
    <div>
      <h3 className="labels">You may select one or more than one domain(s)</h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggle("Tech");
        }}
        className={selected.indexOf("TECH") !== -1 ? "selected" : "buttons"}
      >
        Tech
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggle("Design");
        }}
        className={selected.indexOf("DESIGN") !== -1 ? "selected" : "buttons"}
      >
        Design
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggle("Management");
        }}
        className={
          selected.indexOf("MANAGEMENT") !== -1 ? "selected" : "buttons"
        }
      >
        Management
      </button>
    </div>
  );
};

export const DateChoose = ({ day, dates, setValue, setError, disabled }) => {
  const [selected, setSelected] = useState({
    month: "",
    date: "",
    day: "",
  });

  // const dates = [
  //   {
  //     month: "October",
  //     date: "03",
  //     day: "Sun",
  //   },
  //   {
  //     month: "October",
  //     date: "04",
  //     day: "Mon",
  //   },
  //   {
  //     month: "October",
  //     date: "05",
  //     day: "Tues",
  //   },
  //   {
  //     month: "October",
  //     date: "06",
  //     day: "Wed",
  //   },
  // ];

  const handleSubmit = (month, date, day) => {
    setSelected({
      month: month,
      date: date,
      day: day,
    });
    // console.log(selected);
  };
  if (
    selected !==
    {
      month: "",
      date: "",
      day: "",
    }
  ) {
    setValue(selected);
  }

  return (
    <div>
      {disabled && (
        <h3 className="headingDesign">
          People applying for just the design domain can skip this section.
        </h3>
      )}
      {dates.map((date, index) => {
        return (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit("October", date, day[index]);
            }}
            className={selected.date === date ? "selected" : "buttons"}
            disabled={disabled}
          >
            <div>
              <h3 className="button1">October</h3>
              <h3 className="button2"> {date} </h3>
              <h3 className="button3">{day[index]}</h3>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export const TimeSlot = ({ time, minutes, setValue, setError, disabled }) => {
  const [selected, setSelected] = useState({
    time: "",
    minutes: "",
  });

  // const slots = [
  //   "13:00 - 16:00",
  //   "14:00 - 16:00",
  //   "16:00 - 18:00",
  //   "18:00 - 20:00",
  // ];

  const handleSubmit = (slot, minutes) => {
    setSelected({
      time: slot,
      minutes: minutes,
    });
  };

  if (selected !== "") {
    setValue(selected);
  }

  // console.log(selected);

  return (
    <div>
      {disabled && (
        <h3 className="headingDesign">
          People applying for just the design domain can skip this section.{" "}
        </h3>
      )}
      <h3 className="TimeSlotLabel">
        Select Time Slot{" "}
        <span className="greyLabel">The time slots follow 24hr format</span>
      </h3>
      {time.map((slot, index) => {
        return (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(slot, minutes[index]);
            }}
            disabled={disabled}
            className={selected.time === slot ? "sets" : "buts"}
          >
            {slot}:{minutes[index] < 10 ? `0${minutes[index]}` : minutes[index]}{" "}
            - {slot + 1}:
            {minutes[index] < 10 ? `0${minutes[index]}` : minutes[index]}
          </button>
        );
      })}
    </div>
  );
};
