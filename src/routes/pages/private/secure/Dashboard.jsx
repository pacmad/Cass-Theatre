import React from 'react'
import { Form } from '../../../../components/form/Form'
import { FormButton } from '../../../../components/form/Button'
import { FormInput } from '../../../../components/form/Input'
import { FormFieldset } from '../../../../components/form/Fieldset'
import { FormLabel } from '../../../../components/form/Label'

export const PagePrivateSecureDashboard = () => {
  return (
    <div className='content'>
      <Form>
        <h1 className='form__title'>Edit</h1>
        <FormFieldset>
          <h2 className="form__fieldset--title">
            Global Top Message
          </h2>
          <FormLabel forName={'global-top-message'} text={'Message'} />
          <FormInput 
            typeName={'text'} 
            valueName={null} 
            placeholderName={'e.g. Site will be going down on 11/17 for maintenance'} 
            idName={'global-top-message'} 
          />
        </FormFieldset>
        <FormFieldset>
          <h2 className="form__fieldset--title">
            Global Bottom Message
          </h2>
          <FormLabel forName={'global-bottom-message'} text={'Message'} />
          <FormInput 
            typeName={'text'} 
            valueName={null} 
            placeholderName={'e.g. Movie is free next week!'} 
            idName={'global-bottom-message'} 
          />
        </FormFieldset>
        <FormFieldset>
          <h2 className='form__fieldset--title'>Now Playing</h2>
          <FormLabel forName={'currently-playing-name'} text={'Movie'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'Name of movie'}
            idName={'currently-playing-name'}
          />
          <FormLabel forName={'currently-playing-picture'} text={'Picture'} />
          <FormInput
            typeName={'url'}
            valueName={null}
            placeholderName={'Picture of movie'}
            idName={'currently-playing-picture'}
          />
        </FormFieldset>
        <FormFieldset>
          <h2 className='form__fieldset--title'>Starting</h2>
          <FormLabel forName={'starting-name'} text={'Movie'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'Name of movie'}
            idName={'starting-name'}
          />
          <FormLabel forName={'starting-picture'} text={'Picture'} />
          <FormInput
            typeName={'url'}
            valueName={null}
            placeholderName={'Picture of movie'}
            idName={'starting-picture'}
          />
        </FormFieldset>
        <FormFieldset>
          <h2 className='form__fieldset--title'>Coming soon</h2>
          <FormLabel forName={'coming-soon-name'} text={'Movie'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'Name of movie'}
            idName={'coming-soon-name'}
          />
          <FormLabel forName={'coming-soon-picture'} text={'Picture'} />
          <FormInput
            typeName={'url'}
            valueName={null}
            placeholderName={'Picture of movie'}
            idName={'coming-soon-picture'}
          />
        </FormFieldset>
        <FormFieldset>
          <h2 className="form__fieldset--title">Times</h2>
          <FormLabel forName="time-theatre-open" text={'Theatre opening time'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'e.g. 7:00 PM'}
            idName={'time-theatre-open'}
            />
            <FormLabel forName="time-showtime" text={'Showtime'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'e.g. 7:30 PM'}
            idName={'time-showtime'}
            />
            <FormLabel forName="time-theatre-open-days" text={'Days theatre is open'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'e.g. Wed-Sun'}
            idName={'time-theatre-open-days'}
            />
        </FormFieldset>
        <FormFieldset>
          <h2 className="form__fieldset--title">Payment</h2>
          <FormLabel forName="payment-children" text={'Children cost'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'e.g. 4.00'}
            idName={'payment-children'}
            />
            <FormLabel forName="payment-teens-adults" text={'Teens & Adults cost'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'e.g. 6.00'}
            idName={'payment-teens-adults'}
            />
            <FormLabel forName="payment-extra" text={'Extra message'} />
          <FormInput
            typeName={'text'}
            valueName={null}
            placeholderName={'e.g. No credit cards accepted'}
            idName={'payment-extra'}
            />
        </FormFieldset>
        <FormFieldset>
          <FormButton typeName={'button'} text={'Preview site changes'} />
          <FormButton typeName={'submit'} text={'Submit'} />
        </FormFieldset>
      </Form>
    </div>
  )
}
