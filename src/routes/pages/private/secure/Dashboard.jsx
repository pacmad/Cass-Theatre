import React, { useState, useEffect } from 'react'
import { db, auth } from '../../../../App'
import { Form } from '../../../../components/form/Form'
import { FormButton } from '../../../../components/form/Button'
import { FormInput } from '../../../../components/form/Input'
import { FormFieldset } from '../../../../components/form/Fieldset'
import { FormLabel } from '../../../../components/form/Label'
import { FormMessage } from '../../../../components/form/Message'

export const PagePrivateSecureDashboard = () => {
  let [items, getItems] = useState([])

  let [
    previewSiteChangesVisibility,
    togglePreviewSiteChangesVisibility
  ] = useState(false)

  function handlePreviewSiteChangesButtonClick() {
    togglePreviewSiteChangesVisibility(
      (previewSiteChangesVisibility = !previewSiteChangesVisibility)
    )
  }

  /* Global Long Message */
  let [
    globalLongMessageParagraphOne,
    setGlobalLongMessageParagraphOne
  ] = useState('')
  function modifyGlobalLongMessageParagraphOne(e) {
    setGlobalLongMessageParagraphOne(
      (globalLongMessageParagraphOne = e.target.value)
    )
  }
  let [
    globalLongMessageParagraphTwo,
    setGlobalLongMessageParagraphTwo
  ] = useState('')
  function modifyGlobalLongMessageParagraphTwo(e) {
    setGlobalLongMessageParagraphTwo(
      (globalLongMessageParagraphTwo = e.target.value)
    )
  }
  let [
    globalLongMessageParagraphThree,
    setGlobalLongMessageParagraphThree
  ] = useState('')
  function modifyGlobalLongMessageParagraphThree(e) {
    setGlobalLongMessageParagraphThree(
      (globalLongMessageParagraphThree = e.target.value)
    )
  }
  let [globalLongMessageSnippet, setGlobalLongMessageSnippet] = useState('')
  function modifyGlobalLongMessageSnippet(e) {
    setGlobalLongMessageSnippet((globalLongMessageSnippet = e.target.value))
  }

  /* Global Top Message */
  let [globalTopMessage, setGlobalTopMessage] = useState('')
  function modifyGlobalTopMessage(e) {
    setGlobalTopMessage((globalTopMessage = e.target.value))
  }

  /* Global Bottom Message */
  let [globalBottomMessage, setGlobalBottomMessage] = useState('')
  function modifyGlobalBottomMessage(e) {
    setGlobalBottomMessage((globalBottomMessage = e.target.value))
  }

  /* Currently Playing Hero */
  let [playingTitle, setPlayingTitle] = useState('')
  function modifyPlayingTitle(e) {
    setPlayingTitle((playingTitle = e.target.value))
  }
  let [playingDescription, setPlayingDescription] = useState('')
  function modifyPlayingDescription(e) {
    setPlayingDescription((playingDescription = e.target.value))
  }
  let [playingImage, setPlayingImage] = useState('')
  function modifyPlayingImage(e) {
    setPlayingImage((playingImage = e.target.value))
  }

  /* Starting Date Hero */
  let [startingTitle, setStartingTitle] = useState('')
  function modifyStartingTitle(e) {
    setStartingTitle((startingTitle = e.target.value))
  }
  let [startingDescription, setStartingDescription] = useState('')
  function modifyStartingDescription(e) {
    setStartingDescription((startingDescription = e.target.value))
  }
  let [startingImage, setStartingImage] = useState('')
  function modifyStartingImage(e) {
    setStartingImage((startingImage = e.target.value))
  }

  /* Coming Soon Hero */
  let [comingTitle, setComingTitle] = useState('')
  function modifyComingTitle(e) {
    setComingTitle((comingTitle = e.target.value))
  }
  let [comingDescription, setComingDescription] = useState('')
  function modifyComingDescription(e) {
    setComingDescription((comingDescription = e.target.value))
  }
  let [comingImage, setComingImage] = useState('')
  function modifyComingImage(e) {
    setComingImage((comingImage = e.target.value))
  }

  /* Times Hero */
  let [timeOpenTime, setTimeOpenTime] = useState('')
  function modifyTimeOpenTime(e) {
    setTimeOpenTime((timeOpenTime = e.target.value))
  }
  let [timeShowtime, setTimeShowtime] = useState('')
  function modifyTimeShowtime(e) {
    setTimeShowtime((timeShowtime = e.target.value))
  }
  let [timeDaysOpen, setTimeDaysOpen] = useState('')
  function modifyTimeDaysOpen(e) {
    setTimeDaysOpen((timeDaysOpen = e.target.value))
  }

  /* Payment Hero */
  let [paymentChildrenCost, setPaymentChildrenCost] = useState('')
  function modifyPaymentChildrenCost(e) {
    setPaymentChildrenCost((paymentChildrenCost = e.target.value))
  }
  let [paymentTeensAdultsCost, setPaymentTeensAdultsCost] = useState('')
  function modifyPaymentTeensAdultsCost(e) {
    setPaymentTeensAdultsCost((paymentTeensAdultsCost = e.target.value))
  }
  let [paymentExtraMessage, setPaymentExtraMessage] = useState('')
  function modifyPaymentExtraMessage(e) {
    setPaymentExtraMessage((paymentExtraMessage = e.target.value))
  }

  let [formMessageClass, setFormMessageClass] = useState('')
  let [formMessage, setFormMessage] = useState('')

  useEffect(() => {
    db.collection('data')
      .doc('data')
      .get()
      .then(doc => {
        const data = doc.data()
        getItems((items = data))
        /* Global Long Message */
        setGlobalLongMessageParagraphOne(
          (globalLongMessageParagraphOne = items.globalLongMessageParagraphOne)
        )
        setGlobalLongMessageParagraphTwo(
          (globalLongMessageParagraphTwo = items.globalLongMessageParagraphTwo)
        )
        setGlobalLongMessageParagraphThree(
          (globalLongMessageParagraphThree =
            items.globalLongMessageParagraphThree)
        )
        setGlobalLongMessageSnippet(
          (globalLongMessageSnippet = items.globalLongMessageSnippet)
        )
        /* Global Top Message */
        setGlobalTopMessage((globalTopMessage = items.globalTopMessage))
        /* Global Bottom Message */
        setGlobalBottomMessage(
          (globalBottomMessage = items.globalBottomMessage)
        )
        /* Currently Playing Hero */
        setPlayingTitle((playingTitle = items.playingTitle))
        setPlayingDescription((playingDescription = items.playingDescription))
        setPlayingImage((playingImage = items.playingImage))
        /* Starting Date Hero */
        setStartingTitle((startingTitle = items.startingTitle))
        setStartingDescription(
          (startingDescription = items.startingDescription)
        )
        setStartingImage((startingImage = items.startingImage))
        /* Coming Soon Hero */
        setComingTitle((comingTitle = items.comingTitle))
        setComingDescription((comingDescription = items.comingDescription))
        setComingImage((comingImage = items.comingImage))
        /* Times Hero */
        setTimeOpenTime((timeOpenTime = items.timeOpenTime))
        setTimeShowtime((timeShowtime = items.timeShowtime))
        setTimeDaysOpen((timeDaysOpen = items.timeDaysOpen))
        /* Payment Hero */
        setPaymentChildrenCost(
          (paymentChildrenCost = items.paymentChildrenCost)
        )
        setPaymentTeensAdultsCost(
          (paymentTeensAdultsCost = items.paymentTeensAdultsCost)
        )
        setPaymentExtraMessage(
          (paymentExtraMessage = items.paymentExtraMessage)
        )
      })
  }, [])

  function updateSite(e) {
    e.preventDefault()
    db.collection('data')
      .doc('data')
      .set(
        {
          /* Global Long Message */
          globalLongMessageParagraphOne: globalLongMessageParagraphOne,
          globalLongMessageParagraphTwo: globalLongMessageParagraphTwo,
          globalLongMessageParagraphThree: globalLongMessageParagraphThree,
          globalLongMessageSnippet: globalLongMessageSnippet,
          /* Global Top Message */
          globalTopMessage: globalTopMessage,
          /* Global Bottom Message */
          globalBottomMessage: globalBottomMessage,
          /* Currently Playing Hero */
          playingTitle: playingTitle,
          playingDescription: playingDescription,
          playingImage: playingImage,
          /* Starting Date Hero */
          startingTitle: startingTitle,
          startingDescription: startingDescription,
          startingImage: startingImage,
          /* Coming Soon Hero */
          comingTitle: comingTitle,
          comingDescription: comingDescription,
          comingImage: comingImage,
          /* Times Hero */
          timeOpenTime: timeOpenTime,
          timeShowtime: timeShowtime,
          timeDaysOpen: timeDaysOpen,
          /* Payment Hero */
          paymentChildrenCost: paymentChildrenCost,
          paymentTeensAdultsCost: paymentTeensAdultsCost,
          paymentExtraMessage: paymentExtraMessage
        },
        {
          merge: true
        }
      )
      .then(() => {
        setFormMessageClass((formMessageClass = 'form__message--success'))
        setFormMessage((formMessage = 'The site has been successfully updated'))
      })
      .catch(err => {
        setFormMessageClass((formMessageClass = 'form__message--error'))
        setFormMessage(
          (formMessage = 'An error occured while updating the site')
        )
      })
  }

  function signOut(e) {
    auth.signOut().then(() => {
      window.location.href = '/'
    })
  }

  return (
    <div className="content">
      <Form>
        <h1 className="form__title">Edit</h1>

        <FormFieldset>
          <h2 className="form__fieldset--title">Global Long Message</h2>

          <FormLabel
            forName={'global-long-message-paragraph-one'}
            text={'First paragraph'}
          />

          <FormInput
            typeName={'text'}
            valueName={globalLongMessageParagraphOne}
            onChangeName={modifyGlobalLongMessageParagraphOne}
            placeholderName={
              'e.g. Thumb Bank & Trust is sponsoring Cass Theatre on December 7, 14, and the 21.'
            }
            idName={'global-long-message-paragraph-one'}
          />

          <FormLabel
            forName={'global-long-message-paragraph-two'}
            text={'Second paragraph'}
          />

          <FormInput
            typeName={'text'}
            valueName={globalLongMessageParagraphTwo}
            onChangeName={modifyGlobalLongMessageParagraphTwo}
            placeholderName={'e.g. Bring the whole family!'}
            idName={'global-long-message-paragraph-two'}
          />

          <FormLabel
            forName={'global-long-message-paragraph-three'}
            text={'Third paragraph'}
          />

          <FormInput
            typeName={'text'}
            valueName={globalLongMessageParagraphThree}
            onChangeName={modifyGlobalLongMessageParagraphThree}
            placeholderName={'e.g. Open: 1:30 - Showtime: 2:00.'}
            idName={'global-long-message-paragraph-three'}
          />

          <FormLabel forName={'global-long-message-snippet'} text={'Snippet'} />

          <FormInput
            typeName={'text'}
            valueName={globalLongMessageSnippet}
            onChangeName={modifyGlobalLongMessageSnippet}
            placeholderName={'e.g. Free Saturday Matinees.'}
            idName={'global-long-message-snippet'}
          />
        </FormFieldset>

        <FormFieldset>
          <h2 className="form__fieldset--title">Global Top Message</h2>

          <FormLabel forName={'global-top-message'} text={'Message'} />

          <FormInput
            typeName={'text'}
            valueName={globalTopMessage}
            onChangeName={modifyGlobalTopMessage}
            placeholderName={
              'e.g. Site will be going down on 11/17 for maintenance'
            }
            idName={'global-top-message'}
          />
        </FormFieldset>

        <FormFieldset>
          <h2 className="form__fieldset--title">Global Bottom Message</h2>

          <FormLabel forName={'global-bottom-message'} text={'Message'} />

          <FormInput
            typeName={'text'}
            valueName={globalBottomMessage}
            placeholderName={'e.g. Movie is free next week!'}
            onChangeName={modifyGlobalBottomMessage}
            idName={'global-bottom-message'}
          />
        </FormFieldset>

        <FormFieldset>
          <h2 className="form__fieldset--title">Now Playing</h2>

          <FormLabel forName={'currently-playing-name'} text={'Movie'} />

          <FormInput
            typeName={'text'}
            valueName={playingTitle}
            placeholderName={'Name of movie'}
            onChangeName={modifyPlayingTitle}
            idName={'currently-playing-name'}
          />

          <FormLabel
            forName={'currently-playing-description'}
            text={'Description'}
          />

          <FormInput
            typeName={'text'}
            valueName={playingDescription}
            placeholderName={'e.g. Now Playing!'}
            onChangeName={modifyPlayingDescription}
            idName={'currently-playing-description'}
          />

          <FormLabel forName={'currently-playing-picture'} text={'Picture'} />

          <FormInput
            typeName={'url'}
            valueName={playingImage}
            placeholderName={'Picture of movie'}
            onChangeName={modifyPlayingImage}
            idName={'currently-playing-picture'}
          />
        </FormFieldset>

        <FormFieldset>
          <h2 className="form__fieldset--title">Starting</h2>

          <FormLabel forName={'starting-name'} text={'Movie'} />

          <FormInput
            typeName={'text'}
            valueName={startingTitle}
            placeholderName={'Name of movie'}
            onChangeName={modifyStartingTitle}
            idName={'starting-name'}
          />

          <FormLabel forName={'starting-description'} text={'Description'} />

          <FormInput
            typeName={'text'}
            valueName={startingDescription}
            placeholderName={'e.g. Starting: Friday'}
            onChangeName={modifyStartingDescription}
            idName={'starting-description'}
          />

          <FormLabel forName={'starting-picture'} text={'Picture'} />

          <FormInput
            typeName={'url'}
            valueName={startingImage}
            placeholderName={'Picture of movie'}
            onChangeName={modifyStartingImage}
            idName={'starting-picture'}
          />
        </FormFieldset>

        <FormFieldset>
          <h2 className="form__fieldset--title">Coming soon</h2>

          <FormLabel forName={'coming-soon-name'} text={'Movie'} />

          <FormInput
            typeName={'text'}
            valueName={comingTitle}
            placeholderName={'Name of movie'}
            onChangeName={modifyComingTitle}
            idName={'coming-soon-name'}
          />

          <FormLabel forName={'coming-soon-description'} text={'Description'} />

          <FormInput
            typeName={'text'}
            valueName={comingDescription}
            placeholderName={'e.g. Coming soon'}
            onChangeName={modifyComingDescription}
            idName={'coming-soon-description'}
          />

          <FormLabel forName={'coming-soon-picture'} text={'Picture'} />

          <FormInput
            typeName={'url'}
            valueName={comingImage}
            placeholderName={'Picture of movie'}
            onChangeName={modifyComingImage}
            idName={'coming-soon-picture'}
          />
        </FormFieldset>

        <FormFieldset>
          <h2 className="form__fieldset--title">Times</h2>

          <FormLabel
            forName="time-theatre-open"
            text={'Theatre opening time'}
          />

          <FormInput
            typeName={'text'}
            valueName={timeOpenTime}
            placeholderName={'e.g. 7:00 PM'}
            onChangeName={modifyTimeOpenTime}
            idName={'time-theatre-open'}
          />

          <FormLabel forName="time-showtime" text={'Showtime'} />

          <FormInput
            typeName={'text'}
            valueName={timeShowtime}
            placeholderName={'e.g. 7:30 PM'}
            onChangeName={modifyTimeShowtime}
            idName={'time-showtime'}
          />

          <FormLabel
            forName="time-theatre-open-days"
            text={'Days theatre is open'}
          />

          <FormInput
            typeName={'text'}
            valueName={timeDaysOpen}
            placeholderName={'e.g. Wed-Sun'}
            onChangeName={modifyTimeDaysOpen}
            idName={'time-theatre-open-days'}
          />
        </FormFieldset>

        <FormFieldset>
          <h2 className="form__fieldset--title">Payment</h2>

          <FormLabel forName="payment-children" text={'Children cost'} />

          <FormInput
            typeName={'text'}
            valueName={paymentChildrenCost}
            placeholderName={'e.g. 4.00'}
            onChangeName={modifyPaymentChildrenCost}
            idName={'payment-children'}
          />

          <FormLabel
            forName="payment-teens-adults"
            text={'Teens & Adults cost'}
          />

          <FormInput
            typeName={'text'}
            valueName={paymentTeensAdultsCost}
            placeholderName={'e.g. 6.00'}
            onChangeName={modifyPaymentTeensAdultsCost}
            idName={'payment-teens-adults'}
          />

          <FormLabel forName="payment-extra" text={'Extra message'} />

          <FormInput
            typeName={'text'}
            valueName={paymentExtraMessage}
            placeholderName={'e.g. No credit cards accepted'}
            onChangeName={modifyPaymentExtraMessage}
            idName={'payment-extra'}
          />
        </FormFieldset>

        <FormFieldset>
          {/*
              
                <FormButton
                  typeName={'button'}
                  text={'Preview site changes'}
                  onClickName={handlePreviewSiteChangesButtonClick}
                />
              */}

          <FormButton
            typeName={'submit'}
            text={'Update'}
            onClickName={updateSite}
          />

          <FormButton
            typeName={'button'}
            text={'Logout'}
            onClickName={signOut}
          />
        </FormFieldset>

        <FormMessage class={formMessageClass} text={formMessage} />
      </Form>

      {/*
      
        <PagePrivateSecureComponentPreviewSiteChanges
          isOpen={previewSiteChangesVisibility}
          playingTitle={playingTitle}
          playingDescription={playingDescription}
          playingImage={playingImage}
          startingTitle={startingTitle}
          startingDescription={startingDescription}
          startingImage={startingImage}
          comingTitle={comingTitle}
          comingDescription={comingDescription}
          comingImage={comingImage}
          timeOpenTime={timeOpenTime}
          timeShowtime={timeShowtime}
          timeDaysOpen={timeDaysOpen}
          paymentChildrenCost={paymentChildrenCost}
          paymentTeensAdultsCost={paymentTeensAdultsCost}
          paymentExtraMessage={paymentExtraMessage}
        />
      
      */}
    </div>
  )
}
