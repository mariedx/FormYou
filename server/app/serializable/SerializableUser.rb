class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :email, :first_name, :last_name, :role, :is_validated_by_admin

  belongs_to :role

  link :self do
    @url_helpers.api_user_url(@object.id)
  end
end
