import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {

    const { userId } = auth();
    const transformation = transformationTypes[type];

    if (!userId) {
     return redirect('/sign-in');
    }

    const user = await getUserById(userId);

   

    return (
      <>
        <Header 
          title={transformation.title}
          subtitle={transformation.subTitle}
        />
      
        <section className="mt-10">
          <TransformationForm action={'Add'} userId={''} type={'restore'} creditBalance={0} />
        </section>
      </>
    )
  }

export default AddTransformationTypePage;
