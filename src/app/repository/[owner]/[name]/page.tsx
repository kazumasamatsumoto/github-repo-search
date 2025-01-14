import { notFound } from "next/navigation";
import Image from "next/image";
import { getRepository } from "@/app/lib/github";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Star, GitFork, Eye, CircleDot, AlertCircle } from "lucide-react";
import { BackButton } from "@/app/components/back-button";

interface RepositoryPageProps {
  params: Promise<{
    owner: string;
    name: string;
  }>;
}

export default async function RepositoryPage({ params }: RepositoryPageProps) {
  // paramsを先にawaitする
  const { owner, name } = await params;

  const repository = await getRepository(owner, name).catch((error) => {
    console.error("Repository fetch error:", error);
    notFound();
  });

  // repositoryが存在しない場合の早期リターン
  if (!repository) {
    return null;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <BackButton />
      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Image
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
              width={50}
              height={50}
              className="rounded-full"
            />
            <CardTitle className="text-2xl">{repository.full_name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">{repository.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <div>
                <div className="font-semibold">
                  {repository.stargazers_count.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Stars</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="w-5 h-5" />
              <div>
                <div className="font-semibold">
                  {repository.forks_count.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Forks</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <div>
                <div className="font-semibold">
                  {repository.watchers_count.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Watchers</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <div>
                <div className="font-semibold">
                  {repository.open_issues_count.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Issues</div>
              </div>
            </div>
          </div>

          {repository.language && (
            <div className="flex items-center gap-2">
              <CircleDot className="w-4 h-4" />
              <span>{repository.language}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
