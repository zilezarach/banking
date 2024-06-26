import Authform from "@/components/Authform";
 
const SignUp = async () => {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <Authform type="sign-up" />
        </section>
    )
}
export default SignUp;