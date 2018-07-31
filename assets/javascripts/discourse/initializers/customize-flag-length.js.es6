let PostActionType = require('discourse/models/post-action-type')

export default {
  name: 'customize-flag-length',
  initialize() {
    PostActionType.MAX_MESSAGE_LENGTH = Discourse.SiteSettings.customize_flag_length_max
  }
}
