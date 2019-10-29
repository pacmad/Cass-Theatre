<template>
  <div>
    <div class="form--wrapper">
      <form class="form" @submit.prevent="submitFormData()">
        <FormTitle title="Edit site" />
        <!-- Current Movie Image -->
        <FormSection>
          <FormButton
            @click.native="toggleCurrentMovieImageSectionShown"
            text="Current Movie Image section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="currentMovieImageSectionShown">
              <FormLabel
                title="Current movie image"
                forName="admin-form-current-movie-image-input"
              />
              <FormInput
                typeName="url"
                placeholderName="URL of image"
                :valueName="adminFormData[0].image"
                idName="admin-form-current-movie-image-input"
                isRequired="true"
                v-model="adminFormData[0].image"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- What Is Playing -->
        <FormSection>
          <FormButton
            @click.native="toggleWhatIsPlayingSectionShown"
            text="What Is Playing section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="whatIsPlayingSectionShown">
              <FormLabel title="What is playing" forName="admin-form-what-is-playing-input" />
              <FormInput
                typeName="text"
                placeholderName="Name of movie playing"
                :valueName="datas.wipText"
                idName="admin-form-what-is-playing-input"
                isRequired="true"
                v-model="adminFormData[1].text"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- Starting Soon -->
        <FormSection>
          <FormButton
            @click.native="toggleStartingSoonSectionShown"
            text="Starting Soon section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="startingSoonSectionShown">
              <FormLabel
                title="Date of movie starting soon"
                forName="admin-form-starting-soon-input-1"
              />
              <FormInput
                typeName="text"
                placeholderName="Date"
                :valueName="adminFormData[2].text1"
                idName="admin-form-starting-soon-input-1"
                isRequired="true"
                v-model="adminFormData[2].text1"
              />
              <FormLabel
                title="Name of movie starting soon"
                forName="admin-form-starting-soon-input-2"
              />
              <FormInput
                typeName="text"
                placeholderName="Movie"
                :valueName="adminFormData[2].text2"
                idName="admin-form-starting-soon-input-2"
                isRequired="true"
                v-model="adminFormData[2].text2"
              />
              <FormLabel
                title="Description of movie starting soon"
                forName="admin-form-starting-soon-input-4"
              />
              <FormInput
                typeName="text"
                placeholderName="Description"
                :valueName="adminFormData[2].text3"
                idName="admin-form-starting-soon-input-4"
                isRequired="true"
                v-model="adminFormData[2].text3"
              />
              <FormLabel
                title="Image of movie starting soon"
                forName="admin-form-starting-soon-input-3"
              />
              <FormInput
                typeName="url"
                placeholderName="URL of image"
                :valueName="adminFormData[2].image"
                idName="admin-form-starting-soon-input-3"
                isRequired="true"
                v-model="adminFormData[2].image"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- Coming Soon -->
        <FormSection>
          <FormButton
            @click.native="toggleComingSoonSectionShown"
            text="Coming Soon section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="comingSoonSectionShown">
              <FormLabel
                title="Date of movie coming soon"
                forName="admin-form-coming-soon-input-1"
              />
              <FormInput
                typeName="text"
                placeholderName="Date"
                :valueName="adminFormData[3].text1"
                idName="admin-form-coming-soon-input-1"
                isRequired="true"
                v-model="adminFormData[3].text1"
              />
              <FormLabel
                title="Name of movie coming soon"
                forName="admin-form-coming-soon-input-2"
              />
              <FormInput
                typeName="text"
                placeholderName="Movie"
                :valueName="adminFormData[3].text2"
                idName="admin-form-coming-soon-input-2"
                isRequired="true"
                v-model="adminFormData[3].text2"
              />
              <FormLabel
                title="Description of movie coming soon"
                forName="admin-form-coming-soon-input-3"
              />
              <FormInput
                typeName="text"
                placeholderName="Description"
                :valueName="adminFormData[3].text3"
                idName="admin-form-coming-soon-input-3"
                isRequired="true"
                v-model="adminFormData[3].text3"
              />
              <FormLabel
                title="Image of movie coming soon"
                forName="admin-form-coming-soon-input-4"
              />
              <FormInput
                typeName="url"
                placeholderName="URL of image"
                :valueName="adminFormData[3].image"
                idName="admin-form-coming-soon-input-4"
                isRequired="true"
                v-model="adminFormData[3].image"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- Times -->
        <FormSection>
          <FormButton
            @click.native="toggleTimesSectionShown"
            text="Times section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="timesSectionShown">
              <FormLabel title="Theatre opens at" forName="admin-form-times-input-1" />
              <FormInput
                typeName="text"
                placeholderName="Time"
                :valueName="adminFormData[4].text1"
                idName="admin-form-times-input-1"
                isRequired="true"
                v-model="adminFormData[4].text1"
              />
              <FormLabel title="Showtime" forName="admin-form-times-input-2" />
              <FormInput
                typeName="text"
                placeholderName="Time"
                :valueName="adminFormData[4].text2"
                idName="admin-form-times-input-2"
                isRequired="true"
                v-model="adminFormData[4].text2"
              />
              <FormLabel title="Theatre open" forName="admin-form-times-input-3" />
              <FormInput
                typeName="text"
                placeholderName="Days of the week"
                :valueName="adminFormData[4].text3"
                idName="admin-form-times-input-3"
                isRequired="true"
                v-model="adminFormData[4].text3"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- Payment -->
        <FormSection>
          <FormButton
            @click.native="togglePaymentSectionShown"
            text="Payment section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="paymentSectionShown">
              <FormLabel title="Children cost" forName="admin-form-payment-input-1" />
              <FormInput
                typeName="text"
                placeholderName="Amount"
                :valueName="adminFormData[5].text1"
                idName="admin-form-payment-input-1"
                isRequired="true"
                v-model="adminFormData[5].text1"
              />
              <FormLabel title="Teen/Adult cost" forName="admin-form-payment-input-2" />
              <FormInput
                typeName="text"
                placeholderName="Amount"
                :valueName="adminFormData[5].text2"
                idName="admin-form-payment-input-2"
                isRequired="true"
                v-model="adminFormData[5].text2"
              />
              <FormLabel title="Additional message" forName="admin-form-payment-input-3" />
              <FormInput
                typeName="text"
                placeholderName="e.g. No credit cards accepted"
                :valueName="adminFormData[5].text3"
                idName="admin-form-payment-input-3"
                isRequired="true"
                v-model="adminFormData[5].text3"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- Features -->
        <FormSection>
          <FormButton
            @click.native="toggleFeaturesSectionShown"
            text="Features section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="featuresSectionShown">
              <FormLabel title="Feature 1" forName="admin-form-features-input-1" />
              <FormInput
                typeName="text"
                placeholderName="Feature"
                :valueName="adminFormData[6].text1"
                idName="admin-form-features-input-1"
                isRequired="true"
                v-model="adminFormData[6].text1"
              />
              <FormLabel title="Feature 2" forName="admin-form-features-input-2" />
              <FormInput
                typeName="text"
                placeholderName="Feature"
                :valueName="adminFormData[6].text2"
                idName="admin-form-features-input-2"
                isRequired="true"
                v-model="adminFormData[6].text2"
              />
              <FormLabel title="Feature 3" forName="admin-form-features-input-3" />
              <FormInput
                typeName="text"
                placeholderName="Feature"
                :valueName="adminFormData[6].text3"
                idName="admin-form-features-input-3"
                isRequired="true"
                v-model="adminFormData[6].text3"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- Benefits -->
        <FormSection>
          <FormButton
            @click.native="toggleBenefitsSectionShown"
            text="Benefits section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="benefitsSectionShown">
              <FormLabel title="Benefit 1" forName="admin-form-benefits-input-1" />
              <FormInput
                typeName="text"
                placeholderName="Benefit"
                :valueName="adminFormData[7].text1"
                idName="admin-form-benefits-input-1"
                isRequired="true"
                v-model="adminFormData[7].text1"
              />
              <FormLabel title="Benefit 2" forName="admin-form-benefits-input-2" />
              <FormInput
                typeName="text"
                placeholderName="Benefit"
                :valueName="adminFormData[7].text2"
                idName="admin-form-benefits-input-2"
                isRequired="true"
                v-model="adminFormData[7].text2"
              />
              <FormLabel title="Benefit 3" forName="admin-form-benefits-input-3" />
              <FormInput
                typeName="text"
                placeholderName="Benefit"
                :valueName="adminFormData[7].text3"
                idName="admin-form-benefits-input-3"
                isRequired="true"
                v-model="adminFormData[7].text3"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- Address -->
        <FormSection>
          <FormButton
            @click.native="toggleAddressSectionShown"
            text="Address section"
            typeName="button"
          />
          <transition name="fade">
            <FormFieldset v-if="addressSectionShown">
              <FormLabel title="Name/Phone number" forName="admin-form-address-input-1" />
              <FormInput
                typeName="text"
                placeholderName="Name/Phone"
                :valueName="adminFormData[8].text1"
                idName="admin-form-address-input-1"
                isRequired="true"
                v-model="adminFormData[8].text1"
              />
              <FormLabel title="Street" forName="admin-form-address-input-2" />
              <FormInput
                typeName="text"
                placeholderName="Street"
                :valueName="adminFormData[8].text2"
                idName="admin-form-address-input-2"
                isRequired="true"
                v-model="adminFormData[8].text2"
              />
              <FormLabel title="Town" forName="admin-form-address-input-3" />
              <FormInput
                typeName="text"
                placeholderName="Town"
                :valueName="adminFormData[8].text3"
                idName="admin-form-address-input-3"
                isRequired="true"
                v-model="adminFormData[8].text3"
              />
            </FormFieldset>
          </transition>
        </FormSection>
        <!-- Submit -->
        <FormFieldset>
          <FormButton @click.native="logout" typeName="button" text="Logout" />
          <FormButton
            @click.native="togglePreviewSiteChangesShown"
            typeName="button"
            text="Preview"
          />
          <FormButton typeName="submit" text="Update site" />
        </FormFieldset>
      </form>
    </div>
    <transition name="fade">
      <div
        v-if="previewSiteChangesShown"
        @click="togglePreviewSiteChangesShown"
        class="preview_site_changes__wrapper"
      >
        <PreviewSiteChanges
          :cmImage="adminFormData[0].image"
          :wipText="adminFormData[1].text"
          :wissText1="adminFormData[2].text1"
          :wissText2="adminFormData[2].text2"
          :wissText3="adminFormData[2].text3"
          :wissImage="adminFormData[2].image"
          :wicsText1="adminFormData[3].text1"
          :wicsText2="adminFormData[3].text2"
          :wicsText3="adminFormData[3].text3"
          :wicsImage="adminFormData[3].image"
          :tText1="adminFormData[4].text1"
          :tText2="adminFormData[4].text2"
          :tText3="adminFormData[4].text3"
          :pText1="adminFormData[5].text1"
          :pText2="adminFormData[5].text2"
          :pText3="adminFormData[5].text3"
          :fText1="adminFormData[6].text1"
          :fText2="adminFormData[6].text2"
          :fText3="adminFormData[6].text3"
          :bText1="adminFormData[7].text1"
          :bText2="adminFormData[7].text2"
          :bText3="adminFormData[7].text3"
          :aText1="adminFormData[8].text1"
          :aText2="adminFormData[8].text2"
          :aText3="adminFormData[8].text3"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import { db, auth } from '@/main'

export default {
  name: 'PagePrivateSecureAdmin',
  components: {
    FormTitle: () => import('@/components/form/Title'),
    FormSection: () => import('@/components/form/Section'),
    FormFieldset: () => import('@/components/form/Fieldset'),
    FormLabel: () => import('@/components/form/Label'),
    FormInput: () => import('@/components/form/Input'),
    FormButton: () => import('@/components/form/Button'),
    PreviewSiteChanges: () => import('@/pages/private/secure/PreviewSiteChanges')
  },
  data() {
    return {
      datas: [],
      adminFormData: [
        /* Current movie image */
        {
          image: ''
        },
        /* What is playing */
        {
          text: ''
        },
        /* What is starting soon */
        {
          text1: '',
          text2: '',
          text3: '',
          image: ''
        },
        /* What is coming soon */
        {
          text1: '',
          text2: '',
          text3: '',
          image: ''
        },
        /* Times */
        {
          text1: '',
          text2: '',
          text3: ''
        },
        /* Payment */
        {
          text1: '',
          text2: '',
          text3: ''
        },
        /* Features */
        {
          text1: '',
          text2: '',
          text3: ''
        },
        /* Benefits */
        {
          text1: '',
          text2: '',
          text3: ''
        },
        /* Address */
        {
          text1: '',
          text2: '',
          text3: ''
        }
      ],
      currentMovieImageSectionShown: false,
      whatIsPlayingSectionShown: false,
      startingSoonSectionShown: false,
      comingSoonSectionShown: false,
      timesSectionShown: false,
      paymentSectionShown: false,
      featuresSectionShown: false,
      benefitsSectionShown: false,
      addressSectionShown: false,
      previewSiteChangesShown: false
    }
  },
  firestore() {
    return {
      datas: db.collection('data').doc('data')
    }
  },
  created() {
    db.collection('data')
      .doc('data')
      .get()
      .then(() => {
        /* Current Movie Image */
        this.adminFormData[0].image = this.datas.cmImage
        /* What Is PLaying */
        this.adminFormData[1].text = this.datas.wipText
        /* What Is Starting Soon */
        this.adminFormData[2].text1 = this.datas.wissText1
        this.adminFormData[2].text2 = this.datas.wissText2
        this.adminFormData[2].text3 = this.datas.wissText3
        this.adminFormData[2].image = this.datas.wissImage
        /* What Is Coming Soon */
        this.adminFormData[3].text1 = this.datas.wicsText1
        this.adminFormData[3].text2 = this.datas.wicsText2
        this.adminFormData[3].text3 = this.datas.wicsText3
        this.adminFormData[3].image = this.datas.wicsImage
        /* Times */
        this.adminFormData[4].text1 = this.datas.tText1
        this.adminFormData[4].text2 = this.datas.tText2
        this.adminFormData[4].text3 = this.datas.tText3
        /* Payment */
        this.adminFormData[5].text1 = this.datas.pText1
        this.adminFormData[5].text2 = this.datas.pText2
        this.adminFormData[5].text3 = this.datas.pText3
        /* Features */
        this.adminFormData[6].text1 = this.datas.fText1
        this.adminFormData[6].text2 = this.datas.fText2
        this.adminFormData[6].text3 = this.datas.fText3
        /* Benefits */
        this.adminFormData[7].text1 = this.datas.bText1
        this.adminFormData[7].text2 = this.datas.bText2
        this.adminFormData[7].text3 = this.datas.bText3
        /* Address */
        this.adminFormData[8].text1 = this.datas.aText1
        this.adminFormData[8].text2 = this.datas.aText2
        this.adminFormData[8].text3 = this.datas.aText3
      })
  },
  methods: {
    toggleCurrentMovieImageSectionShown() {
      this.currentMovieImageSectionShown = !this.currentMovieImageSectionShown
    },
    toggleWhatIsPlayingSectionShown() {
      this.whatIsPlayingSectionShown = !this.whatIsPlayingSectionShown
    },
    toggleStartingSoonSectionShown() {
      this.startingSoonSectionShown = !this.startingSoonSectionShown
    },
    toggleComingSoonSectionShown() {
      this.comingSoonSectionShown = !this.comingSoonSectionShown
    },
    toggleTimesSectionShown() {
      this.timesSectionShown = !this.timesSectionShown
    },
    togglePaymentSectionShown() {
      this.paymentSectionShown = !this.paymentSectionShown
    },
    toggleFeaturesSectionShown() {
      this.featuresSectionShown = !this.featuresSectionShown
    },
    toggleBenefitsSectionShown() {
      this.benefitsSectionShown = !this.benefitsSectionShown
    },
    toggleAddressSectionShown() {
      this.addressSectionShown = !this.addressSectionShown
    },
    togglePreviewSiteChangesShown() {
      this.previewSiteChangesShown = !this.previewSiteChangesShown
    },
    logout() {
      auth.signOut().then(() => {
        this.$router.push('/')
      })
    },
    submitFormData() {
      db.collection('data')
        .doc('data')
        .set({
          cmImage: this.adminFormData[0].image,
          wipText: this.adminFormData[1].text,
          wissText1: this.adminFormData[2].text1,
          wissText2: this.adminFormData[2].text2,
          wissText3: this.adminFormData[2].text3,
          wissImage: this.adminFormData[2].image,
          wicsText1: this.adminFormData[3].text1,
          wicsText2: this.adminFormData[3].text2,
          wicsText3: this.adminFormData[3].text3,
          wicsImage: this.adminFormData[3].image,
          tText1: this.adminFormData[4].text1,
          tText2: this.adminFormData[4].text2,
          tText3: this.adminFormData[4].text3,
          pText1: this.adminFormData[5].text1,
          pText2: this.adminFormData[5].text2,
          pText3: this.adminFormData[5].text3,
          fText1: this.adminFormData[6].text1,
          fText2: this.adminFormData[6].text2,
          fText3: this.adminFormData[6].text3,
          bText1: this.adminFormData[7].text1,
          bText2: this.adminFormData[7].text2,
          bText3: this.adminFormData[7].text3,
          aText1: this.adminFormData[8].text1,
          aText2: this.adminFormData[8].text2,
          aText3: this.adminFormData[8].text3
        })
        .then(() => {
          this.logout()
        })
    }
  }
}
</script>
