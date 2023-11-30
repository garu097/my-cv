import { INFO_AUTHOR, LIST_ITEM_NAVBAR, SIZE_ICON } from "@/src/constant";
import React, { useState } from "react";
import styles from "@/styles/layout/contact.module.css";
import { Fade } from "react-awesome-reveal";
import helper from "@/src/utils/helper";
import Image from "next/image";
import clsx from "clsx";
import { IValidField } from "@/src/constant/type";
import { Spinner } from "@/src/components/common/Spinner";

export function Contact() {
  const [fieldForm, setFieldForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isInvalid, setIsInvalid] = useState<IValidField>({
    email: false,
    name: false,
    message: false,
  });
  const [isDisableSubmit, setIsDisableSubmit] = useState<boolean>(false);
  const [isSendMessage, setIsSendMessage] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleChangeName = (e: React.SyntheticEvent) => {
    const text = (e.target as HTMLInputElement).value;
    setFieldForm((prev) => ({ ...prev, name: text }));
    isInvalid.name &&
      setIsInvalid((prev) => ({ ...prev, name: !text.trim().length }));
  };

  const handleChangeEmail = (e: React.SyntheticEvent) => {
    const text = (e.target as HTMLInputElement).value;
    setFieldForm((prev) => ({ ...prev, email: text }));
    isInvalid.email &&
      setIsInvalid((prev) => ({ ...prev, email: !helper.isValidEmail(text) }));
  };

  const handleChangeMessage = (e: React.SyntheticEvent) => {
    const text = (e.target as HTMLInputElement).value;
    setFieldForm((prev) => ({ ...prev, message: text }));
    isInvalid.message &&
      setIsInvalid((prev) => ({ ...prev, message: !text.trim().length }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsFetching(() => true);
    if (
      !helper.isValidEmail(fieldForm.email) &&
      !fieldForm.name.trim().length &&
      !fieldForm.message.trim().length
    ) {
      const isError: IValidField = {
        email: false,
        name: false,
        message: false,
      };
      if (!helper.isValidEmail(fieldForm.email)) {
        isError.email = true;
      }
      if (!fieldForm.message.trim().length) {
        isError.message = true;
      }
      if (!fieldForm.name.trim().length) {
        isError.name = true;
      }
      setIsInvalid({ ...isError });
      return;
    }

    try {
      const formData = new FormData();

      for (const field in fieldForm) {
        formData.append(field, fieldForm[field]);
      }

      const response = await fetch(
        "https://formsubmit.co/ajax/garu097test@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );
      if (response?.ok) {
        setIsSendMessage(true);
      }
      setIsFetching(() => false);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (isInvalid.email || isInvalid.name || isInvalid.message) {
      setIsDisableSubmit(true);
    } else {
      setIsDisableSubmit(false);
    }
  }, [isInvalid]);

  return (
    <section id={LIST_ITEM_NAVBAR.CONTACT} className="container_section">
      <h2 className="title_section">Contact</h2>
      <div className={styles.content}>
        <Fade>
          <div className={styles.form_container}>
            <h4 className={styles.title}>Send me a message!</h4>
            <form onSubmit={handleSubmit} className={styles.form_content}>
              <div
                className={clsx(styles.group_input, styles.group_input_name)}
              >
                <input
                  name="name"
                  value={fieldForm.name}
                  className={clsx(styles.form_input, {
                    [`${styles.input_active}`]: fieldForm.name,
                  })}
                  onChange={handleChangeName}
                />
                <label className={styles.form_label}>name</label>
                {isInvalid.name && (
                  <span className={styles.text_error}>Name is empty</span>
                )}
              </div>
              <div
                className={clsx(styles.group_input, styles.group_input_email)}
              >
                <input
                  name="email"
                  value={fieldForm.email}
                  className={clsx(styles.form_input, {
                    [`${styles.input_active}`]: fieldForm.email,
                  })}
                  onChange={handleChangeEmail}
                />
                <label className={styles.form_label}>email</label>
                {isInvalid.email && (
                  <span className={styles.text_error}>Email not valid</span>
                )}
              </div>
              <div
                className={clsx(styles.group_input, styles.group_input_message)}
              >
                <textarea
                  value={fieldForm.message}
                  name="message"
                  rows={4}
                  className={clsx(styles.form_textarea, {
                    [`${styles.input_active}`]: fieldForm.message,
                  })}
                  onChange={handleChangeMessage}
                />
                <label className={styles.form_label}>message</label>
                {isInvalid.message && (
                  <span className={styles.text_error}>Message is empty</span>
                )}
              </div>
              <button
                disabled={isDisableSubmit || isFetching}
                className={styles.button_submit}
                type="submit"
              >
                {isFetching ? <Spinner /> : "Submit"}
              </button>

              {isSendMessage && (
                <Fade className={styles.message_sent}>
                  <div>The message has been sent! Thank you!</div>
                </Fade>
              )}
            </form>
          </div>
          <div className={styles.socials}>
            <h4 className={styles.title}>Socials</h4>
            <div className={styles.group_socials}>
              {Object.keys(INFO_AUTHOR).map((key) => (
                <a
                  key={key}
                  href={INFO_AUTHOR[key]?.url}
                  target="_blank"
                  className={styles.link_icon}
                  rel="noreferrer"
                >
                  <Image
                    src={INFO_AUTHOR[key].icon}
                    width={SIZE_ICON.DEFAULT.width}
                    height={SIZE_ICON.DEFAULT.height}
                  />
                  <span>{`${helper.capitalizeFirstLetter(key)} : ${
                    INFO_AUTHOR[key].name
                  }`}</span>
                </a>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
